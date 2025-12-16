Cypress.Commands.add("login", (email, password) => {
  return cy.request({
    method: "POST",
    url: `${Cypress.env("apiUrl")}login`,
    headers: {
      "Content-Type": "application/json",
    },
    failOnStatusCode: false,
    body: {
      email: email,
      password: password,
    },
  });
});

