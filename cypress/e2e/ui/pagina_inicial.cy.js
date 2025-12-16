import homeData from "../../fixtures/home.json";
import produtoData from "../../fixtures/produtos.json";
import { faker } from "@faker-js/faker";
let email = faker.internet.email();

describe("Valida os componentes principais da Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Validar Banner Home", () => {
    cy.validarHomeBanner();
  });

  it("Validar Shelf da Home", () => {
    cy.validarShelf(homeData.shelf.title);
    cy.validarProdutoShelf(homeData.shelf.product);
  });

  it("Validar News Letter", () => {
    cy.validarNewsletter(homeData.newsletter.newsletterTitle);
  });

  it("Validar Envio de E-mail do newsletter", () => {
    cy.validateNewsletterInput(homeData.newsletter.placeholder, email);
    cy.validarMensagem(homeData.newsletter.messageSucess);
  });

  it("Validar e-mail inválido", () => {
    cy.validateNewsletterInput(
      homeData.newsletter.placeholder,
      homeData.newsletter.invalidEmail
    );
    cy.validateNewsletterEmailMessage(homeData.newsletter.messagemailInvalid);
  });

  it("Valida os componentes principais da Home Page", () => {
    cy.validarShelf(homeData.shelf.title);
    cy.validarModalProduto();
  });

  it("Validar os elementos do modal de produto", () => {
    cy.validarModalProduto();
    cy.validarTituloModal(produtoData.produto.titulo);
    cy.validarDescricaoModalProduto(produtoData.produto.descricao);
    cy.validarDetalhesModalProduto(produtoData.produto.detalhes);
  });

  it("Validar imagem do modal", () => {
    cy.validarModalProduto();
    cy.validarImagemModalProduto();
  });

  it("Validar fechar o modal corretamente", () => {
    cy.validarModalProduto();
    cy.fecharModalProduto();
  });
});
