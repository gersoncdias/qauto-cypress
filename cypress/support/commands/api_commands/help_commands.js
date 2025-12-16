Cypress.Commands.add("createHelp", ({ name, email, message }) => {
  return cy.request({
    method: "POST",
    url: `${Cypress.env("apiUrl")}help`,
    headers: {},
    failOnStatusCode: false,
    body: {
      name: name,
      email: email,
      message: message,
    },
  });
});

Cypress.Commands.add("getHelp", () => {
  cy.request({
    method: "GET",
    url: `${Cypress.env("apiUrl")}help`,
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
