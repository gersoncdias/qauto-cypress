import { homeElements } from "../../page_elements/home_elements.js";
import { productElements } from "../../page_elements/produtos_elements.js";

Cypress.Commands.add("validarHomeBanner", () => {
  cy.get(homeElements.banner).should("be.visible").and("exist");
});

Cypress.Commands.add("validarShelf", (expectedText) => {
  cy.get(homeElements.shelf.titleShelf)
    .should("be.visible")
    .and("exist")
    .and("contain.text", expectedText);
});
Cypress.Commands.add("validarProdutoShelf", (expectedText) => {
  cy.get(homeElements.shelf.productshelf)
    .should("be.visible")
    .and("exist")
    .invoke("attr", "alt")
    .should("eq", expectedText);
});

Cypress.Commands.add("validarModalProduto", () => {
  cy.get(homeElements.shelf.productshelf)
    .should("be.visible")
    .and("exist")
    .click();
});

Cypress.Commands.add("validarNewsletter", (expectedText) => {
  cy.get(homeElements.newsletter.newsletterContainer)
    .should("be.visible")
    .and("exist").and("contain.text", expectedText);;
});

Cypress.Commands.add("validateNewsletterInput", (expectedText,email) => {
  cy.get(homeElements.newsletter.input)
    .should('be.visible')
    .and('have.attr', 'placeholder', expectedText)
    .type(email)
  cy.get(homeElements.newsletter.button).click();  
});

Cypress.Commands.add('validarMensagem', (expectedText) => {
  cy.get(homeElements.newsletter.msg_sucess)
    .should('be.visible')
    .and('contain.text', expectedText);
});
Cypress.Commands.add('validateNewsletterEmailMessage', (expectedMessage) => {
  cy.get(homeElements.newsletter.input_email).then(($input) => {
    const validationMessage = $input[0].validationMessage;

    expect(validationMessage).to.satisfy((msg) =>
      msg.includes("Inclua um \"@\"") || msg.includes("Please include an '@'")
    );
  });
});


Cypress.Commands.add("validarTituloModal", (expectedTitle) => {
  cy.get(productElements.modal.title)
    .should("be.visible")
    .and("contain", expectedTitle);
});
;

Cypress.Commands.add("validarDescricaoModalProduto", (expectedDescription) => {
  cy.get(productElements.modal.descricao)
    .should("be.visible")
    .and("contain", expectedDescription);
});
Cypress.Commands.add("validarDetalhesModalProduto", (expectedDetails) => {
  cy.get(productElements.modal.brand).should("contain", expectedDetails.brand);
  cy.get(productElements.modal.year).should("contain", expectedDetails.year);
  cy.get(productElements.modal.power).should("contain", expectedDetails.power);
  cy.get(productElements.modal.fuel).should("contain", expectedDetails.fuel);
  cy.get(productElements.modal.price).should("contain", expectedDetails.price);
});

Cypress.Commands.add("validarImagemModalProduto", () => {
  cy.get(productElements.modal.img)
    .should("be.visible")
    .and("exist")
});


Cypress.Commands.add("fecharModalProduto", () => {
  cy.get(productElements.modal.btm_close).click();
  cy.get(productElements.modal.modal).should("not.exist");
});