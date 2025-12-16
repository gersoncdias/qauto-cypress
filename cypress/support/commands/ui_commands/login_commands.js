import { loginElements } from "../../page_elements/login_elements.js";

Cypress.Commands.add("abrirModalLogin", () => {
  cy.get('[data-qa-id="qa_header_auth_login"]').click();
  cy.get(loginElements.modal).should("be.visible");
});

Cypress.Commands.add("validarModalLogin", (title) => {
  cy.get(loginElements.modal).should("be.visible");
  cy.get(loginElements.title).should("be.visible").and("have.text", title);
  cy.get(loginElements.emailInput).should("be.visible");
  cy.get(loginElements.passwordInput).should("be.visible");
  cy.get(loginElements.submitButton).should("be.visible");
  cy.get(loginElements.cancelButton).should("be.visible");
  cy.get(loginElements.toggleMethodButton).should("be.visible");
});

Cypress.Commands.add("fazerLogin", (email, password) => {
  cy.get(loginElements.emailInput).clear().type(email);
  cy.get(loginElements.passwordInput).clear().type(password);
});

Cypress.Commands.add("enviarformulariologin", () => {
  cy.get(loginElements.submitButton).click();
});
Cypress.Commands.add("validarLoginSucesso", () => {
  cy.url().should("not.include", "/login");
});

Cypress.Commands.add("validarErroLogin", (mensagemErro) => {
  cy.get(loginElements.errorMessage)
    .should("be.visible")
    .and("have.text", mensagemErro);
});

Cypress.Commands.add("clicarBotaoLoginMobile", () => {
  cy.window().then((win) => {
    if (win.innerWidth <= 768) {
      cy.abrirMenuMobile();
    }
  });

  cy.get(loginElements.btn_login_mobile)
    .contains("Login")
    .click();
});

Cypress.Commands.add("clicarBotaoCadastroMobile", () => {
  cy.window().then((win) => {
    if (win.innerWidth <= 768) {
      cy.abrirMenuMobile();
    }
  });

  cy.get(loginElements.btn_registro_mobile)
    .contains("Cadastro")
    .click();
});
