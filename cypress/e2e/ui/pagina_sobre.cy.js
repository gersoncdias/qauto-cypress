import sobreData from "../../fixtures/sobre.json";

describe("Valida a estrutura e conteúdos da Página Sobre", () => {
    beforeEach(() => {
      cy.visit("/sobre");
    });
  
    it("Validar elementos principais da Pagina Sobre", () => {
      cy.ValidaTitulo(sobreData.sobre.title);
    });
    it("Validar Sessão Quem Somos", () => {
      cy.validarSessaoQuemSomos(sobreData.sobre.section_who);
    });
    it("Validar Sessão Valores", () => {
      cy.validarSessaoValores(sobreData.sobre.section_values);
    });
  });