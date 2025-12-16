Cypress.Commands.add("createUser", ({ name, surname, email, password }) => {
  return cy.request({
    method: "POST",
    url: `${Cypress.env("apiUrl")}users/register`,
    headers: {},
    failOnStatusCode: false,
    body: {
      name: name,
      surname: surname,
      email: email,
      password: password,
    },
  });
});

Cypress.Commands.add("getUser", () => {
  cy.request({
    method: "GET",
    url: `${Cypress.env("apiUrl")}users`,
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
