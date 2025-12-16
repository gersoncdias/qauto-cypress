import headerData from "../../fixtures/header.json";
import loginData from "../../fixtures/login.json";
import registerData from "../../fixtures/register.json";

describe("Validar a estrutura e a navegação do Header", () => {
  beforeEach(function () {
    cy.window().then((win) => {
      if (win.innerWidth <= 768) {
        this.skip();
      }
    });

    cy.visit("/");
  });

  it("Validar Header", () => {
    cy.validarHeader();
  });

  it("Validar Logo Header", () => {
    cy.validarLogoHeader(headerData.logo_alt);
  });
  it("Validar Botão Navegação Home", () => {
    cy.clicarMenuNavegacaoHome();
  });
  it("Validar Botão Navegação Sobra", () => {
    cy.clicarMenuNavegacaoSobre();
  });

  it("Validar Botão Navegação Sedans", () => {
    cy.clicarMenuNavegacaoSeda();
  });

  it("Validar Botão Navegação SUVs", () => {
    cy.clicarMenuNavegacaoSuvs();
  });

  it("Validar Botão Navegação Ajuda", () => {
    cy.clicarMenuNavegacaoAjuda();
  });

  it("Validar Botão Login", () => {
    cy.clicarBotaoAutenticacaoLogin();
    cy.validarModalLogin(loginData.title);
  });

  it("Validar Botão Cadastro", () => {
    cy.clicarBotaoAutenticacaoRegistro();
    cy.validarModalCadastro(registerData.title);
  });
});
describe("Validar a estrutura e a navegação do Header - Mobile", () => {
  beforeEach(function () {
    cy.window().then((win) => {
      if (win.innerWidth > 768) {
        this.skip();
      }
    });
    cy.visit("/");
  });

  afterEach(() => {
    cy.fecharMenuMobile();
  });

  it("Deve abrir o menu hambúrguer", () => {
    cy.abrirMenuMobile();
  });

  it("Deve validar o botão Home no menu mobile", () => {
    cy.abrirMenuMobile();
    cy.validarBotaoMenuHome();
  });

  it("Deve validar o botão Sobre Nós no menu mobile", () => {
    cy.abrirMenuMobile();
    cy.validarBotaoMenuSobreNos();
  });

  it("Deve validar o botão Carros no menu mobile", () => {
    cy.abrirMenuMobile();
    cy.validarBotaoMenuCarros();
  });

  it("Deve validar o botão Ajuda no menu mobile", () => {
    cy.abrirMenuMobile();
    cy.validarBotaoMenuAjuda();
  });

  it("Deve validar o botão Login no menu mobile", () => {
    cy.abrirMenuMobile();
    cy.validarBotaoMenuLogin();
  });

  it("Deve validar o botão Cadastro no menu mobile", () => {
    cy.abrirMenuMobile();
    cy.validarBotaoMenuCadastro();
  });
});

