import loginData from "../../fixtures/login.json";

describe("Valida a exibição e funcionalidade do Modal de Login", () => {

  beforeEach(function () {
    cy.window().then((win) => {
      if (win.innerWidth <= 768) {
        this.skip();
      }
    });
    cy.visit("/");
    cy.abrirModalLogin();
  });


  it("Validar a estrutura do modal de login", () => {
    cy.validarModalLogin(loginData.title);
  });

  it("Validar login com sucesso", () => {
    cy.fazerLogin(loginData.validUser.email, loginData.validUser.password);
    cy.enviarformulariologin();
    cy.validarLoginSucesso();
  });

  it("Validar login com credenciais inválidas", () => {
    cy.fazerLogin(loginData.invalidUser.email, loginData.invalidUser.password);
    cy.enviarformulariologin();
    cy.validarErroLogin(loginData.invalidCredentials);
  });

  it("Validar login sem preencher os campos", () => {
    cy.enviarformulariologin();
    cy.validarErroLogin(loginData.emptyFields);
  });
});

describe("Valida a exibição e funcionalidade do Modal de Login - Mobile", () => {

  beforeEach(function () {
    cy.window().then((win) => {
      if (win.innerWidth > 768) {
        this.skip();
      }
    });
    cy.visit("/");
    cy.clicarBotaoLoginMobile();
    cy.validarModalLogin(loginData.title);
  });


  it("Validar a estrutura do modal de login", () => {
    cy.validarModalLogin(loginData.title);
  });

  it("Validar login com sucesso", () => {
    cy.fazerLogin(loginData.validUser.email, loginData.validUser.password);
    cy.enviarformulariologin();
    cy.validarLoginSucesso();
  });

  it("Validar login com credenciais inválidas", () => {
    cy.fazerLogin(loginData.invalidUser.email, loginData.invalidUser.password);
    cy.enviarformulariologin();
    cy.validarErroLogin(loginData.invalidCredentials);
  });

  it("Validar login sem preencher os campos", () => {
    cy.enviarformulariologin();
    cy.validarErroLogin(loginData.emptyFields);
  });
});