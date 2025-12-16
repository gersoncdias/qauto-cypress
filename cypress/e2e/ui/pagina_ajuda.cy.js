import helpData from "../../fixtures/help.json";
import { faker } from "@faker-js/faker";

describe("Validar os elementos e funcionalidades da Página de Ajuda", () => {
  beforeEach(() => {
    cy.visit("/ajuda");
  });

  it("Validar título", () => {
    cy.validarTítuloAjuda(helpData.title);
  });
  it("Validar subtítulo", () => {
    cy.validarSubTítuloAjuda(helpData.subtitle);
  });

  it("Validar a seção de FAQ", () => {
    cy.validarSecaoPerguntas(helpData.faqTitle);
  });

  it("Validar a pergunta sobre login", () => {
    cy.validarFaqLogin(helpData.faq.login.question, helpData.faq.login.answer);
  });

  it("Validar a pergunta sobre suporte", () => {
    cy.validarFaqSuporte(
      helpData.faq.support.question,
      helpData.faq.support.answer
    );
  });

  it("Validar a pergunta sobre navegadores", () => {
    cy.validarFaqNavegadores(
      helpData.faq.browsers.question,
      helpData.faq.browsers.answer
    );
  });
  it("Validar título", () => {
    cy.validarTituloFormulario(helpData.form.title);
  });

  it("Validar descrição do formulário", () => {
    cy.validarDescricaoFormulario(helpData.form.description);
  });

  it("Validar se os campos do formulário estão visíveis e obrigatórios", () => {
    cy.validarCamposObrigatorios();
  });

  it("Validar envio de formulário com sucesso", () => {
    const nome = faker.person.fullName();
    const email = faker.internet.email();
    const mensagem = faker.lorem.sentences(2);

    cy.validarInserirNome(nome);
    cy.validarInserirEmail(email);
    cy.validarInserirMensagem(mensagem);
    cy.validarBtnEnviarFormulario();
    cy.validarMensagemFormulario(helpData.form.successMessage);
  });

  it("Validar Formulário com campo vazio", () => {
    cy.validarBtnEnviarFormulario();
    cy.validarMensagemFormularioVazio(helpData.form.errorMensage);
  });
});
