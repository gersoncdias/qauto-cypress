/// <reference types="cypress" />
import { productElements } from "../../page_elements/product_elements";

Cypress.Commands.add("abrirModalProduto", () => {
  cy.get(productElements.Product.bugat).should("be.visible").click();
});

Cypress.Commands.add("validarImagemModalProduto", () => {
  cy.get(productElements.modalImage)
    .should("be.visible")
    .and("have.attr", "src",);
});

Cypress.Commands.add("validarTituloModalProduto", (productData) => {
  cy.get(productElements.modalTitle)
    .should("be.visible")
    .and("have.text", productData);
});

Cypress.Commands.add("validarDescricaoModalProduto", (productData) => {
  cy.get(productElements.modalDescription)
    .should("be.visible")
    .and("have.text", productData);
});

Cypress.Commands.add("validarMarcaModalProduto", (productData) => {
  cy.get(productElements.modalBrand).should("contain.text", productData);
});

Cypress.Commands.add("validarAnolProduto", (productData) => {
  cy.get(productElements.modalYear).should("contain.text", productData);
});

Cypress.Commands.add("validarPotenciaModalProduto", (productData) => {
  cy.get(productElements.modalPower).should("contain.text", productData);
});

Cypress.Commands.add("validarCombustivelModalProduto", (productData) => {
  cy.get(productElements.modalFuel).should("contain.text", productData);
});

Cypress.Commands.add("validarPrecoModalProduto", (productData) => {
  cy.get(productElements.modalPrice).should("contain.text", productData);
});

Cypress.Commands.add("validarBtnComprarModalProduto", (productData) => {
  cy.get(productElements.modalBuyButton).should("contain.text", productData);
});

Cypress.Commands.add("fecharModalProduto", () => {
  cy.get(productElements.modalCloseButton).click();
  cy.get(productElements.modal).should("not.exist");
});
