/// <reference types="cypress" />
import { registerElements } from "../../page_elements/register_elements";

Cypress.Commands.add("abrirModalCadastro", () => {
  cy.get('[data-qa-id="qa_header_auth_register"]').click();
  cy.get(registerElements.modal).should("be.visible");
});

Cypress.Commands.add("validarModalCadastro", (title) => {
  cy.get(registerElements.title).should("be.visible").and("have.text", title);
  cy.get(registerElements.closeButton).should("be.visible");
  cy.get(registerElements.nameInput).should("be.visible");
  cy.get(registerElements.surnameInput).should("be.visible");
  cy.get(registerElements.phoneInput).should("be.visible");
  cy.get(registerElements.emailInput).should("be.visible");
  cy.get(registerElements.passwordInput).should("be.visible");
  cy.get(registerElements.confirmPasswordInput).should("be.visible");
  cy.get(registerElements.submitButton).should("be.visible");
});

Cypress.Commands.add("preencherFormularioCadastro", (userData) => {
  cy.get(registerElements.nameInput).type(userData.name);
  cy.get(registerElements.surnameInput).type(userData.surname);
  cy.get(registerElements.phoneInput).type(userData.phone);
  cy.get(registerElements.emailInput).type(userData.email);
  cy.get(registerElements.passwordInput).type(userData.password);
  cy.get(registerElements.confirmPasswordInput).type(userData.password);

  if (userData.gender === "male") {
    cy.get(registerElements.genderMale).click();
  } else if (userData.gender === "female") {
    cy.get(registerElements.genderFemale).click();
  } else {
    cy.get(registerElements.genderOther).click();
  }

  cy.get(registerElements.stateSelect).click();
  cy.contains(userData.state).click();
});

Cypress.Commands.add("enviarFormularioCadastro", () => {
  cy.get(registerElements.submitButton).click();
});

Cypress.Commands.add("validarCadastroSucesso", (successMessage) => {
  cy.get(registerElements.modal).should("not.exist");
  cy.get(registerElements.successTooltip)
    .should("be.visible")
    .and("have.text", successMessage);
});

Cypress.Commands.add("validarCadastroErro", (errorMessage) => {
  cy.get(registerElements.errorMessage)
    .should("be.visible")
    .and("have.text", errorMessage);
});

Cypress.Commands.add("validarSubmeterFormVazio", () => {
    cy.get(registerElements.submitButton).click();

  });

Cypress.Commands.add("validarCamposObrigatoriosNome", (name) => {
  cy.get(registerElements.submitButton).click();

  cy.get(registerElements.errorName)
    .should("be.visible")
    .and("have.text", name);
});

Cypress.Commands.add("validarCamposObrigatoriosSobreNome", (surname) => {
  cy.get(registerElements.errorSurname)
    .should("be.visible")
    .and("have.text", surname);
});

Cypress.Commands.add("validarCamposObrigatoriosEmail", (email) => {
  cy.get(registerElements.errorEmail)
    .should("be.visible")
    .and("have.text", email);
});
Cypress.Commands.add("validarCamposObrigatoriosSenha", (password) => {
  cy.get(registerElements.errorPassword)
    .should("be.visible")
    .and("have.text", password);
});
