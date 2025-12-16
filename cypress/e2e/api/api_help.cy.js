import apiData from "../../fixtures/api.json";
import { faker } from "@faker-js/faker";

const helpFormData = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  message: faker.lorem.sentence(10),
};
const helpFormErroData = {
  name: "",
  email: faker.internet.email(),
  message: faker.lorem.sentence(10),
};
const helpFormEmailData = {
  name: faker.person.fullName(),
  email: "emailErrado.com",
  message: faker.lorem.sentence(10),
};

describe("API Help", () => {
  it("Deve buscar Menssagem do Formulario de Ajuda", () => {
    cy.getHelp().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0].id).to.be.a("number");
      expect(response.body[0].name).to.be.a("string").and.not.be.empty;
      expect(response.body[0].email).to.be.a("string").and.not.be.empty;
      expect(response.body[0].message).to.be.a("string").and.not.be.empty;
      expect(response.body[0].created_at).to.be.a("string").and.not.be.empty;
    });
  });

  it("Deve cadastrar um Formulario de Ajuda com sucesso", () => {
    cy.createHelp(helpFormData).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq(apiData.help.message_create_sucess);
    });
  });

  it("Deve cadastrar um Formulario de Ajuda com compo vazios", () => {
    cy.createHelp(helpFormErroData).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq(apiData.help.message_erro_create);
    });
  });
  it("Deve cadastrar um Formulario de Ajuda com compo e-mail inválido", () => {
    cy.createHelp(helpFormEmailData).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq(apiData.help.message_erro_email);
    });
  });
});
