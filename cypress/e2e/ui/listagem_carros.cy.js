import sedanData from "../../fixtures/carros.json";

describe("Valida a navegação e exibição da página de Sedans", () => {
  beforeEach(() => {
    cy.visit("/carros/sedan");
  });

  it("Validar os detalhes dos sedans - BMW", () => {
    cy.validarSedanBmw(
      sedanData.sedans.bmwM7.alt,
      sedanData.sedans.bmwM7.name,
      sedanData.sedans.bmwM7.description,
      sedanData.sedans.bmwM7.price
    );
  });

  it("Validar os detalhes dos sedans - Bugatti", () => {
    cy.validarSedanBugatti(
      sedanData.sedans.bugattiChiron.alt,
      sedanData.sedans.bugattiChiron.name,
      sedanData.sedans.bugattiChiron.description,
      sedanData.sedans.bugattiChiron.price
    );
  });

  it("Validar os detalhes dos sedans - Mercedes", () => {
    cy.validarSedanMercedes(
      sedanData.sedans.mercedesCabriolet.alt,
      sedanData.sedans.mercedesCabriolet.name,
      sedanData.sedans.mercedesCabriolet.description,
      sedanData.sedans.mercedesCabriolet.price
    );
  });
  it("Validar os detalhes dos sedans - Rolls-Royce", () => {
    cy.validarSedanRollsRoyce(
      sedanData.sedans.rollsRoyce.alt,
      sedanData.sedans.rollsRoyce.name,
      sedanData.sedans.rollsRoyce.description,
      sedanData.sedans.rollsRoyce.price
    );
  });

  it("Validar os detalhes dos sedans - Alfa Romeo", () => {
    cy.validarSedanAlfaRomeo(
      sedanData.sedans.alfaRomeo.alt,
      sedanData.sedans.alfaRomeo.name,
      sedanData.sedans.alfaRomeo.description,
      sedanData.sedans.alfaRomeo.price
    );
  });
});
describe("Valida a navegação e exibição da página de SUVs", () => {
  beforeEach(() => {
    cy.visit("/carros/suvs");
  });

  it("Validar os detalhes dos sedans - Volvo", () => {
    cy.validarSuvVolvo(
      sedanData.suvs.volvoXC90.alt,
      sedanData.suvs.volvoXC90.name,
      sedanData.suvs.volvoXC90.description,
      sedanData.suvs.volvoXC90.price
    );
  });

  it("Validar os detalhes dos sedans - Lamborghini ", () => {
    cy.validarSuvLamborghini(
      sedanData.suvs.lamborghini.alt,
      sedanData.suvs.lamborghini.name,
      sedanData.suvs.lamborghini.description,
      sedanData.suvs.lamborghini.price
    );
  });

  it("Validar os detalhes dos sedans - BMW X6 ", () => {
    cy.validarSuvBmwX6(
      sedanData.suvs.bmwX6.alt,
      sedanData.suvs.bmwX6.name,
      sedanData.suvs.bmwX6.description,
      sedanData.suvs.bmwX6.price
    );
  });
  it("Validar os detalhes dos sedans - Mercedes-Benz G63", () => {
    cy.validarSuvMercedesG6(
      sedanData.suvs.mercedesG63.alt,
      sedanData.suvs.mercedesG63.name,
      sedanData.suvs.mercedesG63.description,
      sedanData.suvs.mercedesG63.price
    );
  });

  it("Validar os detalhes dos sedans - Alfa Romeo", () => {
    cy.validarSuvRangeRover(
      sedanData.suvs.rangeRover.alt,
      sedanData.suvs.rangeRover.name,
      sedanData.suvs.rangeRover.description,
      sedanData.suvs.rangeRover.price
    );
  });
});
