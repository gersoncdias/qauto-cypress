import apiData from "../../fixtures/api.json";
import { faker } from "@faker-js/faker";

const userData = {
  name: faker.person.firstName(),
  surname: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(12),
};

describe("API User", () => {
  it("Deve buscar usuarios cadastrados", () => {
    cy.getUser().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it("Deve cadastrar um usuário com sucesso e validar a mensagem", () => {
    cy.createUser(userData).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq(apiData.user.message_create_sucess);
    });
  });

  it("Deve validar erro ao tentar cadastrar um usuário já existente", () => {
    cy.getUser().then((response) => {
      const duplicateUser = {
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        email: response.body[0].email,
        password: faker.internet.password(12),
      };

      cy.createUser(duplicateUser).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.error).to.eq(apiData.user.message_erro_create);
      });
    });
  });

  it("Deve validar erro ao tentar cadastrar um usuário sem dados", () => {
    cy.getUser().then((response) => {
      const duplicateUser = {
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        email: "",
        password: faker.internet.password(12),
      };

      cy.createUser(duplicateUser).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.error).to.eq(apiData.user.message_erro_data);
      });
    });
  });

  it("Deve validar erro ao tentar cadastrar um usuário nome inválido", () => {
    cy.getUser().then((response) => {
      const duplicateUser = {
        name: "123",
        surname: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(12),
      };

      cy.createUser(duplicateUser).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.error).to.eq(apiData.user.message_nome_ivalid);
      });
    });
  });

  it("Deve validar erro ao tentar cadastrar um usuário sobrenome inválido", () => {
    cy.getUser().then((response) => {
      const duplicateUser = {
        name: faker.person.firstName(),
        surname: "123",
        email: faker.internet.email(),
        password: faker.internet.password(12),
      };

      cy.createUser(duplicateUser).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.error).to.eq(
          apiData.user.message_sobre_nome_ivalid
        );
      });
    });

    it("Deve validar erro ao tentar cadastrar um usuário e-mail inválido", () => {
      cy.getUser().then((response) => {
        const duplicateUser = {
          name: faker.person.firstName(),
          surname: faker.person.lastName(),
          email: "mailteste.com",
          password: faker.internet.password(12),
        };

        cy.createUser(duplicateUser).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body.error).to.eq(
            apiData.user.message_sobre_nome_ivalid
          );
        });
      });
    });
  });
});
