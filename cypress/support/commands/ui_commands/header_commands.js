/// <reference types="cypress" />
import { headerElements } from "../../page_elements/header_elements";

Cypress.Commands.add("validarHeader", () => {
  cy.get(headerElements.header).should("be.visible");
});

Cypress.Commands.add("validarLogoHeader", (logo_alt) => {
  cy.get(headerElements.logo)
    .should("be.visible")
    .and("have.attr", "alt", logo_alt);
});

Cypress.Commands.add("clicarMenuNavegacaoHome", () => {
  cy.get(headerElements.navHome).should("be.visible").click();
  cy.url().should("include", "/");
});

Cypress.Commands.add("clicarMenuNavegacaoSobre", () => {
  cy.get(headerElements.navAbout).should("be.visible").click();
  cy.url().should("include", "/sobre");
});

Cypress.Commands.add("clicarMenuNavegacaoSeda", () => {
  cy.get(headerElements.navCars).should("be.visible").click();
  cy.clicarOpcaoMenuCarros("Sedans");
  cy.url().should("include", "/carros/sedan");
});

Cypress.Commands.add("clicarMenuNavegacaoSuvs", () => {
  cy.get(headerElements.navCars).should("be.visible").click();
  cy.clicarOpcaoMenuCarros("suvs");
  cy.url().should("include", "/carros/suvs");
});

Cypress.Commands.add("clicarOpcaoMenuCarros", (opcao) => {
  cy.contains("li", opcao, { matchCase: false }).click();
});

Cypress.Commands.add("clicarMenuNavegacaoAjuda", () => {
  cy.get(headerElements.navHelp).should("be.visible").click();
  cy.url().should("include", "/ajuda");
});

Cypress.Commands.add("clicarBotaoAutenticacaoLogin", (boao) => {
  cy.get(headerElements.loginButton).should("be.visible").click();
});

Cypress.Commands.add("clicarBotaoAutenticacaoRegistro", (boao) => {
  cy.get(headerElements.registerButton).should("be.visible").click();
});

Cypress.Commands.add("abrirMenuSeNecessario", () => {
  cy.get(headerElements.navHome).then(($menu) => {
    if ($menu.css("display") === "none") {
      cy.get(headerElements.mobile.MenuButton).should("be.visible").click();
    }
  });
});

Cypress.Commands.add("abrirMenuMobile", () => {
  cy.wait(1000)
  cy.get("body").then(($body) => {
    if ($body.find(headerElements.mobile.menuHamburguer).length > 0) {
      cy.get(headerElements.mobile.menuHamburguer).should("be.visible").click();

      cy.get(headerElements.mobile.modalMenu).should("exist").and("be.visible").wait(100);;
      
    }
  });
});

Cypress.Commands.add("validarBotaoMenuMobile", (botao) => {
  cy.get(headerElements.mobile.modalMenu)
    .should("exist")
    .and("be.visible")
    .within(() => {
      cy.contains("button", botao).should("be.visible");
    });
});

Cypress.Commands.add("validarBotaoMenuHome", () => {
  cy.get(headerElements.mobile.botoesNavegacao.home).should("be.visible");
});

Cypress.Commands.add("validarBotaoMenuSobreNos", () => {
  cy.get(headerElements.mobile.botoesNavegacao.sobreNos).should("be.visible");
});

Cypress.Commands.add("validarBotaoMenuCarros", () => {
  cy.get(headerElements.mobile.botoesNavegacao.carros).should("be.visible");
});

Cypress.Commands.add("validarBotaoMenuAjuda", () => {
  cy.get(headerElements.mobile.botoesNavegacao.ajuda).should("be.visible");
});

Cypress.Commands.add("validarBotaoMenuLogin", () => {
  cy.get(headerElements.mobile.botoesNavegacao.login).should("be.visible");
});

Cypress.Commands.add("validarBotaoMenuCadastro", () => {
  cy.get(headerElements.mobile.botoesNavegacao.cadastro).should("be.visible");
});

Cypress.Commands.add("fecharMenuMobile", () => {
  cy.get("body").then(($body) => {
    if ($body.find(headerElements.mobile.botaoFechar).length > 0) {
      cy.get(headerElements.mobile.botaoFechar)
        .should("be.visible")
        .click();
      cy.get(headerElements.mobile.modalMenu).should("not.exist");
    }
  });
});