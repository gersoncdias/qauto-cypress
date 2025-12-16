import { sobreElements } from "../../page_elements/sobre_elements.js";

Cypress.Commands.add("ValidaTitulo", (expectedText) => {
    cy.get(sobreElements.title).should("be.visible")
    .and("exist")
    .and("contain.text", expectedText);
})

Cypress.Commands.add('validarSessaoValores', (expectedText) => {
  cy.get(sobreElements.section_values.modal).should('be.visible');
  cy.get(sobreElements.section_values.title)
    .should('be.visible')
    .and('contain.text', expectedText.title);

  cy.get(sobreElements.section_values.text)
    .should('be.visible')
    .and('contain.text', expectedText.content.excelencia)
    .and('contain.text', expectedText.content.qualidade)
    .and('contain.text', expectedText.content.confianca)
    .and('contain.text', expectedText.content.compra)
    .and('contain.text', expectedText.content.paixao)
    .and('contain.text', expectedText.content.sonho);
});

Cypress.Commands.add('validarSessaoQuemSomos', (expectedText) => {
    cy.get(sobreElements.section_who.modal).should('be.visible');
    cy.get(sobreElements.section_who.title)
      .should('be.visible')
      .and('contain.text', expectedText.title);
  
    cy.get(sobreElements.section_who.text)
      .should('be.visible')
      .and('contain.text', expectedText.content.empresa)
      .and('contain.text', expectedText.content.especialidade)
      .and('contain.text', expectedText.content.experiencia)
      .and('contain.text', expectedText.content.desde)
      .and('contain.text', expectedText.content.marcas);
  });
  