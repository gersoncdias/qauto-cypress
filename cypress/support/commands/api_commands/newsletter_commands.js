Cypress.Commands.add("subscribeNewsletter", (email) => {
  cy.request({
    method: "POST",
    url: `${Cypress.env("apiUrl")}newsletter`,
    headers: {},
    failOnStatusCode: false,
    body: {
      email: email,
    },
  });
});

Cypress.Commands.add("getNewsletterSubscriptions", () => {
  cy.request({
    method: "GET",
    url: `${Cypress.env("apiUrl")}newsletter`,
    headers: {},
  });
});

Cypress.Commands.add("deleteNewsletterSubscription", (id) => {
  cy.request({
    method: "DELETE",
    url: `${Cypress.env("apiUrl")}newsletter/${id}`,
    headers: {},
    failOnStatusCode: false,
  });
});
