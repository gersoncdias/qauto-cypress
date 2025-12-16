import apiData from "../../fixtures/api.json";
import { faker } from "@faker-js/faker";
const email = faker.internet.email();
let subscriptionId = 4;

describe("API Newsletter", () => {
  it("Deve cadastrar o envio de e-mail na newsletter", () => {
    cy.subscribeNewsletter(email).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq(apiData.newsletter.messageSucess);
    });
  });

  it("Deve retornar erro ao enviar um e-mail Vazio", () => {
    cy.subscribeNewsletter(apiData.newsletter.email_invalido).then(
      (response) => {
        expect(response.status).to.eq(400);
        expect(response.body.error).to.eq(
          apiData.newsletter.message_erro_email
        );
      }
    );
  });

  it("Deve retornar erro ao enviar um e-mail inválido", () => {
    cy.subscribeNewsletter("").then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq(apiData.newsletter.messageError);
    });
  });

  it("Deve retornar a lista de inscrições na newsletter", () => {
    cy.getNewsletterSubscriptions().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it("Deve deletar uma inscrição existente na newsletter com sucesso", () => {
    cy.getNewsletterSubscriptions().then((response) => {
      const validId = response.body[0].id;

      cy.deleteNewsletterSubscription(validId).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq(
          apiData.newsletter.message_delete_sucess
        );
      });
    });
  });

  it("Deve retornar erro ao tentar deletar uma inscrição inexistente na newsletter", () => {
    cy.deleteNewsletterSubscription(subscriptionId).then((response) => {
      expect(response.status).to.be.eq(404);
      expect(response.body.error).to.eq(
        apiData.newsletter.message_delete_error
      );
    });
  });
});
