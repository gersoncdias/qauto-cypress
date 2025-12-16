import { helpElements } from "../../page_elements/help_elements.js";
Cypress.Commands.add("validarTítuloAjuda", () => {
  cy.fixture("help").then((data) => {
    cy.get(helpElements.title)
      .should("be.visible")
      .and("have.text", data.title);
  });
});

Cypress.Commands.add("validarSubTítuloAjuda", () => {
  cy.fixture("help").then((data) => {
    cy.get(helpElements.subtitle)
      .should("be.visible")
      .and("have.text", data.subtitle);
  });
});

Cypress.Commands.add("validarSecaoPerguntas", () => {
  cy.fixture("help").then((data) => {
    cy.get(helpElements.faqSection).should("be.visible");
    cy.get(helpElements.faqTitle)
      .should("be.visible")
      .and("have.text", data.faqTitle);
  });
});

Cypress.Commands.add("validarFaqLogin", () => {
  cy.fixture("help").then((data) => {
    cy.get(helpElements.faqLogin.question)
      .should("be.visible")
      .and("contain.text", data.faq.login.question)
      .click();

    cy.get(helpElements.faqLogin.answer)
      .should("be.visible")
      .and("contain.text", data.faq.login.answer);
  });
});

Cypress.Commands.add("validarFaqSuporte", () => {
  cy.fixture("help").then((data) => {
    cy.get(helpElements.faqSupport.question)
      .should("be.visible")
      .and("contain.text", data.faq.support.question)
      .click();

    cy.get(helpElements.faqSupport.answer)
      .should("be.visible")
      .and("contain.text", data.faq.support.answer);
  });
});

Cypress.Commands.add("validarFaqNavegadores", () => {
  cy.fixture("help").then((data) => {
    cy.get(helpElements.faqBrowsers.question)
      .should("be.visible")
      .and("contain.text", data.faq.browsers.question)
      .click();

    cy.get(helpElements.faqBrowsers.answer)
      .should("be.visible")
      .and("contain.text", data.faq.browsers.answer);
  });
});

Cypress.Commands.add("validarTituloFormulario", () => {
  cy.fixture("help").then((data) => {
    cy.get(helpElements.form.title)
      .should("be.visible")
      .and("have.text", data.form.title);
  });
});

Cypress.Commands.add("validarDescricaoFormulario", () => {
  cy.fixture("help").then((data) => {
    cy.get(helpElements.form.description)
      .should("be.visible")
      .and("have.text", data.form.description);
  });
});

Cypress.Commands.add("validarCamposObrigatorios", () => {
  cy.get(helpElements.form.nameInput)
    .should("be.visible")
    .and("have.attr", "required");
  cy.get(helpElements.form.emailInput)
    .should("be.visible")
    .and("have.attr", "required");
  cy.get(helpElements.form.messageInput)
    .should("be.visible")
    .and("have.attr", "required");
});

Cypress.Commands.add("validarInserirNome", (name) => {
  cy.get(helpElements.form.nameInput).type(name);
});

Cypress.Commands.add("validarInserirEmail", (email) => {
  cy.get(helpElements.form.emailInput).type(email);
});

Cypress.Commands.add("validarInserirMensagem", (message) => {
  cy.get(helpElements.form.messageInput).first().type(message);
});

Cypress.Commands.add("validarBtnEnviarFormulario", () => {
  cy.get(helpElements.form.submitButton).click();
});

Cypress.Commands.add("validarMensagemFormulario", (Message) => {
  cy.get(helpElements.form.successMessage)
    .should("be.visible")
    .contains(Message);
});
Cypress.Commands.add("validarMensagemFormularioVazio", (Message) => {
  cy.get(helpElements.form.errorMessage)
    .should("be.visible")
    .contains(Message);
});