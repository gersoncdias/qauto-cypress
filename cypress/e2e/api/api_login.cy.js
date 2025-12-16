import loginData from "../../fixtures/login.json";

describe("API User - Login via API e Captura do Token", () => {
  it("Deve validar login via API", () => {
    cy.login(loginData.validUser.email, loginData.validUser.password).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.user.name).to.eq(loginData.validUser.name);
    });
  });
});
