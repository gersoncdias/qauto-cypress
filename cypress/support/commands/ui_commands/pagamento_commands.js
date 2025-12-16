import { productElements } from "../../page_elements/product_elements";
import { paymentElements } from "../../page_elements/pagamento_elements";

Cypress.Commands.add("validaClickrBtnComprarModalProduto", (productData) => {
  cy.get(productElements.modalBuyButton)
    .should("contain.text", productData)
    .click();
});

Cypress.Commands.add("validarInformacoesPagamento", (produto) => {
  cy.get(paymentElements.carTitle)
    .should("be.visible")
    .and("contain.text", "Carro Escolhido:");
  cy.get(paymentElements.carName).should("contain.text", produto.modelo);
  cy.get(paymentElements.carPrice).should("contain.text", produto.preco);
  cy.get(paymentElements.carBrand).should("contain.text", produto.marca);
  cy.get(paymentElements.carYear).should("contain.text", produto.ano);
});

Cypress.Commands.add("selecionarMetodoPagamento", (metodo) => {
  if (metodo === "cartao") {
    cy.get(paymentElements.paymentCreditCard).click();
  } else {
    cy.get(paymentElements.paymentBoleto).click();
  }
});

Cypress.Commands.add("selecionarBandeira", (bandeira) => {
  cy.get(paymentElements.cardBrandSelect).click();
  cy.contains(bandeira).click();
});

Cypress.Commands.add("preencherNumeroCartao", (numero) => {
  cy.get(paymentElements.cardNumberInput).type(numero);
});

Cypress.Commands.add("preencherTitularCartao", (titular) => {
  cy.get(paymentElements.cardHolderInput).type(titular);
});

Cypress.Commands.add("preencherValidadeCartao", (validade) => {
  cy.get(paymentElements.cardExpiryInput).type(validade);
});

Cypress.Commands.add("preencherCvcCartao", (cvv) => {
  cy.get(paymentElements.cardCvvInput).type(cvv);
});

Cypress.Commands.add("confirmarPagamento", () => {
  cy.get(paymentElements.submitButton).click();
});

Cypress.Commands.add("validarPagamentoSucesso", (mensagem) => {
  cy.get(paymentElements.successMessage)
    .should("be.visible")
    .and("contain.text", mensagem);
});

Cypress.Commands.add("validarErroPagamento", (mensagem) => {
  cy.get(paymentElements.errorMessage)
    .should("be.visible")
    .and("contain.text", mensagem);
});

// Validação dos erros individuais
Cypress.Commands.add("validarErroCartaoNumero", (mensagem) => {
  cy.get(paymentElements.errorCardNumber)
    .should("be.visible")
    .and("contain.text", mensagem);
});

Cypress.Commands.add("validarErroCartaoTitular", (mensagem) => {
  cy.get(paymentElements.errorCardHolder)
    .should("be.visible")
    .and("contain.text", mensagem);
});

Cypress.Commands.add("validarErroCartaoValidade", (mensagem) => {
  cy.get(paymentElements.errorCardExpiry)
    .should("be.visible")
    .and("contain.text", mensagem);
});

Cypress.Commands.add("validarErroCartaoCvv", (mensagem) => {
  cy.get(paymentElements.errorCardCvv)
    .should("be.visible")
    .and("contain.text", mensagem);
});
