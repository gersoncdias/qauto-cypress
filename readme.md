# QAuto Cypress

Automação de testes UI e API do projeto **QAuto** construída em Cypress. O repositório já vem com comandos customizados, massa de dados e scripts para diferentes tamanhos de tela.

## Requisitos
- Node.js LTS (>=18)
- npm (instalado junto com o Node.js)
- Acesso à internet para executar as chamadas da aplicação QAuto

## Instalação
1. Instale as dependências:
   ```bash
   npm install
   ```
2. (Opcional) Abra o Cypress para validar a instalação:
   ```bash
   npx cypress open
   ```

## Estrutura do Projeto
```text
.
├── cypress.config.js        # Configuração do Cypress (baseUrl, reporter, hooks)
└── cypress/
    ├── e2e/
    │   ├── api/             # Especificações de API (*.cy.js)
    │   └── ui/              # Especificações de UI (*.cy.js)
    ├── fixtures/            # Massa de dados JSON utilizada nos testes
    ├── support/
    │   ├── commands/        # Comandos customizados (UI e API)
    │   ├── page_elements/   # Mapeamento de seletores
    │   └── utils/           # Scripts auxiliares (ex.: relatório)
    └── reports/             # Saída de relatórios (ignorada pelo git)
```

## Scripts Disponíveis
| Script | Descrição |
| ------ | --------- |
| `npm run test:desktop` | Executa todos os testes de UI em viewport 1920x1080 (Chrome headless). |
| `npm run test:mobile`  | Executa os testes de UI simulando 360x740. |
| `npm run test:all`     | Roda `test:desktop` e `test:mobile` em sequência. |
| `npm run test:api`     | Executa apenas os cenários em `cypress/e2e/api`. |
| `npm run generate:report` | Converte `cypress/reports/raw-results.json` em HTML. |

## Execução Manual
- Interface interativa: `npx cypress open`
- Headless com especificação específica:
  ```bash
  npx cypress run --spec "cypress/e2e/ui/pagina_inicial.cy.js"
  ```
- Altere/adicione variáveis (ex.: `apiUrl`) no bloco `env` de `cypress.config.js`.

## Relatórios
O hook `after:run` grava um resumo em `cypress/reports/raw-results.json` após cada `cypress run`. Para gerar um HTML amigável execute:
```bash
npm run generate:report
```
Os arquivos produzidos permanecem dentro de `cypress/reports/`, que está listado no `.gitignore`.

## Boas Práticas
- Novos comandos devem ser criados em `cypress/support/commands` e importados em `cypress/support/e2e.js`.
- Utilize os objetos de `cypress/support/page_elements` para manter os seletores centralizados.
- Respeite o padrão `*.cy.js` e mantenha as specs dentro de `cypress/e2e`.

Com isso o projeto está pronto para ser executado logo após `npm install`. Bons testes!
