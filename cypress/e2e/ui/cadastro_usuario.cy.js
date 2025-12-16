import registerData from "../../fixtures/register.json";
import { faker } from "@faker-js/faker";
faker.locale = "pt_BR";

describe("Valida o preenchimento e envio do Formulário de Cadastro", () => {
  beforeEach(function () {
    cy.window().then((win) => {
      if (win.innerWidth <= 768) {
        this.skip();
      }
    });
    cy.visit("/");
    cy.abrirModalCadastro();
  });

  it("Validar modal de cadastro", () => {
    cy.validarModalCadastro(registerData.title);
  });

  it("Validar cadastro com sucesso", () => {
    const userData = {
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      phone: "21999999999",
      email: faker.internet.email(),
      password: faker.internet.password(12),
      gender: "male",
      state: "São Paulo",
    };

    cy.preencherFormularioCadastro(userData);
    cy.enviarFormularioCadastro();
    cy.validarCadastroSucesso(registerData.successMessage);
  });

  it("Validar cadastro sem preencher os nome obrigatórios", () => {
    cy.validarSubmeterFormVazio();
    cy.validarCamposObrigatoriosNome(registerData.errors.name);
  });

  it("Validar cadastro sem preencher os Sobrenome obrigatórios", () => {
    cy.validarSubmeterFormVazio();
    cy.validarCamposObrigatoriosSobreNome(registerData.errors.surname);
  });

  it("Validar cadastro sem preencher os Email obrigatórios", () => {
    cy.validarSubmeterFormVazio();
    cy.validarCamposObrigatoriosEmail(registerData.errors.email);
  });

  it("Validar cadastro sem preencher os Senha obrigatórios", () => {
    cy.validarSubmeterFormVazio();
    cy.validarCamposObrigatoriosSenha(registerData.errors.password);
  });
});

describe("Valida o preenchimento e envio do Formulário de Cadastro - Mobile", () => {
  beforeEach(function () {
    cy.window().then((win) => {
      if (win.innerWidth > 768) {
        this.skip();
      }
    });
    cy.visit("/");
    cy.clicarBotaoCadastroMobile();
  });

  it("Validar modal de cadastro", () => {
    cy.validarModalCadastro(registerData.title);
  });

  it("Validar cadastro com sucesso", () => {
    const userData = {
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      phone: faker.phone.number("119########"),
      email: faker.internet.email(),
      password: faker.internet.password(12),
      gender: "male",
      state: "São Paulo",
    };

    cy.preencherFormularioCadastro(userData);
    cy.enviarFormularioCadastro();
    cy.validarCadastroSucesso(registerData.successMessage);
  });

  it("Validar cadastro sem preencher os nome obrigatórios", () => {
    cy.validarSubmeterFormVazio();
    cy.validarCamposObrigatoriosNome(registerData.errors.name);
  });

  it("Validar cadastro sem preencher os Sobrenome obrigatórios", () => {
    cy.validarSubmeterFormVazio();
    cy.validarCamposObrigatoriosSobreNome(registerData.errors.surname);
  });

  it("Validar cadastro sem preencher os Email obrigatórios", () => {
    cy.validarSubmeterFormVazio();
    cy.validarCamposObrigatoriosEmail(registerData.errors.email);
  });

  it("Validar cadastro sem preencher os Senha obrigatórios", () => {
    cy.validarSubmeterFormVazio();
    cy.validarCamposObrigatoriosSenha(registerData.errors.password);
  });
});
