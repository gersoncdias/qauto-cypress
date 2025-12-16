// File: qa-tests/cypress/cypress/support/utils/generate-report.js

const fs = require("fs");
const path = require("path");

// ——— CONFIGURAÇÃO ———
const projectName = "QAuto – Automação Cypress";

// ——— PATHS ———
const projectRoot = path.resolve(__dirname, "../../../");
const reportsDir = path.join(projectRoot, "cypress", "reports");
const assetsDir = path.join(projectRoot, "cypress", "assets");
const inputJson = path.join(reportsDir, "raw-results.json");
const outputHtml = path.join(reportsDir, "report.html");

// localiza logo
let logoSrc = null;
["logo.png", "logo-qauto.png"].forEach((name) => {
  const p = path.join(assetsDir, name);
  if (!logoSrc && fs.existsSync(p)) logoSrc = p;
});
const logoDest = path.join(reportsDir, "logo.png");

// prepara diretórios e logo
fs.mkdirSync(reportsDir, { recursive: true });
if (logoSrc) fs.copyFileSync(logoSrc, logoDest);

// carrega JSON
if (!fs.existsSync(inputJson)) {
  console.error(`❌ raw-results.json não encontrado em ${inputJson}`);
  process.exit(1);
}
const data = JSON.parse(fs.readFileSync(inputJson, "utf-8"));

// métricas gerais
const totalTests = data.totalTests || 0;
const totalPassed = data.totalPassed || 0;
const totalFailed = data.totalFailed || 0;
const totalSkipped = data.totalPending || 0;
const passRate = totalTests
  ? ((totalPassed / totalTests) * 100).toFixed(2)
  : "0.00";

// formata data de execução
const start = data.wallClockStartedAt
  ? new Date(data.wallClockStartedAt)
  : null;
const durationMs = data.wallClockDuration || 0;
const end = start ? new Date(start.getTime() + durationMs) : null;
function fmt(dt) {
  return dt.toLocaleDateString("pt-BR") + " " + dt.toLocaleTimeString("pt-BR");
}
const execInfo =
  start && end ? `${fmt(start)} – ${end.toLocaleTimeString("pt-BR")}` : "";

// separa suítes API / UI
const apiRuns = [];
const uiRuns = [];
data.runs.forEach((run) => {
  const name = path.basename(run.spec.relative);
  const stats = run.stats;
  const item = {
    name,
    passed: stats.passes,
    failed: stats.failures,
    skipped: stats.pending,
  };
  run.spec.relative.includes("/api/") ? apiRuns.push(item) : uiRuns.push(item);
});

// gera HTML
const html = `<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>${projectName}</title>
  <meta name="generated-at" content="${new Date().toISOString()}">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2"></script>
  <style>
    body { font-family: Arial; padding: 20px; background: #f3f4f6; }
    header { background-color: #4c5f72; color: #fff; padding: 16px; border-radius: 6px; display: flex; align-items: center; gap: 12px; }
    header img { height: 40px; }
    header h1 { margin: 0; font-size: 1.5rem; }
    .print-btn { position: fixed; bottom: 20px; right: 20px; z-index: 999; }
    .print-btn button { padding: 8px 12px; font-size: 12px; cursor: pointer; background-color: #4c5f72; color: white; border: none; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.2); }
    .print-btn button:hover { background-color: #3b4e60; }
    main { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: auto 1fr; gap: 16px; margin-top: 20px; }
    section { background: #fff; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); overflow: hidden; }
    h2 { font-size: 1rem; font-weight: 600; margin-bottom: 8px; }
    .exec-summary { font-size: 0.875rem; color: #e5e7eb; margin-bottom: 12px; text-align: center; }
    .donut-chart { width: 40%; aspect-ratio: 1/1; margin: 0 auto 8px; }
    .status-chart { width: 100%; height: 200px; }
    canvas { width: 100% !important; height: 100% !important; }
    .list-block { grid-column: 1/3; overflow: auto; margin-top: 8px; padding-right: 8px; }
    .item { display: flex; align-items: center; padding: 6px 0; border-bottom: 1px solid #e5e7eb; font-size: 0.875rem; }
    .item-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-right: 8px; }
    .bar { display: flex; flex: 1; height: 24px; border-radius: 4px; overflow: hidden; }
    .bar > div { display: flex; align-items: center; justify-content: center; color: #fff; font-size: 0.75rem; }
  </style>
</head>
<body>
 <header class="header">
  ${logoSrc ? `<img src="logo.png" alt="Logo">` : ""}
  <h1>${projectName}</h1>
  <div class="print-btn">
    <button onclick="window.print()">Imprimir</button>
  </div>
</header>
  <main>

    <!-- Q1: Pass Rate (top-left) -->
    <section style="grid-column:1;grid-row:1;">
      <h2>Pass Rate</h2>
      <div class="exec-summary">
        <p><strong>Execução:</strong> ${execInfo}</p>
        <p><strong>Total de testes:</strong> ${totalTests}</p>
        <p><strong>Pass Rate:</strong> ${passRate}%</p>
      </div>
      ${execInfo ? `<div class="exec-info">${execInfo}</div>` : ""}
      <div class="chart-container"><canvas id="donut"></canvas></div>
    </section>

   <!-- Q2: Distribuição de Status (top-right) -->
    <section style="grid-column:2;grid-row:1;">
      <h2>Distribuição de Status</h2>
    
      <!-- Container com altura fixa e full-width -->
      <div class="chart-container status-chart" style="width:100%; height:200px; position:relative;">
        <canvas id="bars"></canvas>
      </div>
    </section>


    <!-- Q3: API Suites (bottom-left) -->
    <section style="grid-column:1;grid-row:2;">
      <h2>API Suites</h2>
      <div class="list-block">
        ${apiRuns
          .map(
            (s) => `
          <div class="item">
            <span class="item-name">${s.name}</span>
            <div class="bar">
              ${
                s.passed > 0
                  ? `<div style="flex:${s.passed};background:#16a34a">${s.passed}</div>`
                  : ""
              }
              ${
                s.failed > 0
                  ? `<div style="flex:${s.failed};background:#dc2626">${s.failed}</div>`
                  : ""
              }
              ${
                s.skipped > 0
                  ? `<div style="flex:${s.skipped};background:#6b7280">${s.skipped}</div>`
                  : ""
              }
            </div>
          </div>`
          )
          .join("")}
      </div>
    </section>

    <!-- Q4: UI Suites (bottom-right) -->
    <section style="grid-column:2;grid-row:2;">
      <h2>UI Suites</h2>
      <div class="list-block">
        ${uiRuns
          .map(
            (s) => `
          <div class="item">
            <span class="item-name">${s.name}</span>
            <div class="bar">
              ${
                s.passed > 0
                  ? `<div style="flex:${s.passed};background:#16a34a">${s.passed}</div>`
                  : ""
              }
              ${
                s.failed > 0
                  ? `<div style="flex:${s.failed};background:#dc2626">${s.failed}</div>`
                  : ""
              }
              ${
                s.skipped > 0
                  ? `<div style="flex:${s.skipped};background:#6b7280">${s.skipped}</div>`
                  : ""
              }
            </div>
          </div>`
          )
          .join("")}
      </div>
    </section>

  </main>

  <script>
    Chart.register(ChartDataLabels);
    new Chart(document.getElementById("donut").getContext("2d"), {
      type: "doughnut",
      data: {
        labels: ["Pass","Fail","Skip"],
        datasets: [{ data: [${totalPassed},${totalFailed},${totalSkipped}], backgroundColor: ["#16a34a","#dc2626","#6b7280"] }]
      },
      options: {
        cutout: "70%",
        plugins: {
          legend: { display: false },
          datalabels: { display: false }
        }
      }
    });
     new Chart(document.getElementById('bars').getContext('2d'), {
      type:'bar',
      data:{ labels:['Pass','Fail','Skip'], datasets:[{ data:[${totalPassed},${totalFailed},${totalSkipped}], backgroundColor:['#16a34a','#dc2626','#6b7280'] }] },
      options:{
        indexAxis:'y',
        maintainAspectRatio:false,
        scales:{
          x:{ beginAtZero:true, grid:{display:false}, ticks:{ display:false }, border:{ display:false } },
          y:{ grid:{display:false} }
        },
        plugins:{ legend:{display:false}, datalabels:{ color:'#fff', anchor:'center', align:'center', formatter:v=>v||'' } }
      },
      plugins:[ChartDataLabels]
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(outputHtml, html, "utf-8");
console.log(`✅ Dashboard atualizado gerado em: ${outputHtml}`);
