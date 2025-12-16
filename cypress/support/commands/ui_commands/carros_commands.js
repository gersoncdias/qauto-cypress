import { carrosElements } from "../../page_elements/carros_elements.js";

Cypress.Commands.add("validarSedanBmw", (expectedalt, expectedname, expecteddest, expectedprice) => {
  cy.get(carrosElements.bmwM7.item).should("be.visible");
  cy.get(carrosElements.bmwM7.image)
    .should("be.visible")
    .and("have.attr", "alt", expectedalt);
  cy.get(carrosElements.bmwM7.name).should("contain.text", expectedname);
  cy.get(carrosElements.bmwM7.description).should("contain.text", expecteddest);
  cy.get(carrosElements.bmwM7.price).should("contain.text", expectedprice);
});

Cypress.Commands.add("validarSedanBugatti", (expectedalt, expectedname, expecteddest, expectedprice) => {
  cy.get(carrosElements.bugattiChiron.item).should("be.visible");
  cy.get(carrosElements.bugattiChiron.image)
    .should("be.visible")
    .and("have.attr", "alt", expectedalt);
  cy.get(carrosElements.bugattiChiron.name).should("contain.text", expectedname);
  cy.get(carrosElements.bugattiChiron.description).should("contain.text", expecteddest);
  cy.get(carrosElements.bugattiChiron.price).should("contain.text", expectedprice);
});

Cypress.Commands.add("validarSedanMercedes", (expectedalt, expectedname, expecteddest, expectedprice) => {
  cy.get(carrosElements.mercedesCabriolet.item).should("be.visible");
  cy.get(carrosElements.mercedesCabriolet.image)
    .should("be.visible")
    .and("have.attr", "alt", expectedalt);
  cy.get(carrosElements.mercedesCabriolet.name).should("contain.text", expectedname);
  cy.get(carrosElements.mercedesCabriolet.description).should("contain.text", expecteddest);
  cy.get(carrosElements.mercedesCabriolet.price).should("contain.text", expectedprice);
});

Cypress.Commands.add("validarSedanRollsRoyce", (expectedalt, expectedname, expecteddest, expectedprice) => {
  cy.get(carrosElements.rollsRoyce.item).should("be.visible");
  cy.get(carrosElements.rollsRoyce.image)
    .should("be.visible")
    .and("have.attr", "alt", expectedalt);
  cy.get(carrosElements.rollsRoyce.name).should("contain.text", expectedname);
  cy.get(carrosElements.rollsRoyce.description).should("contain.text", expecteddest);
  cy.get(carrosElements.rollsRoyce.price).should("contain.text", expectedprice);
});

Cypress.Commands.add("validarSedanAlfaRomeo", (expectedalt, expectedname, expecteddest, expectedprice) => {
  cy.get(carrosElements.alfaRomeo.item).should("be.visible");
  cy.get(carrosElements.alfaRomeo.image)
    .should("be.visible")
    .and("have.attr", "alt", expectedalt);
  cy.get(carrosElements.alfaRomeo.name).should("contain.text", expectedname);
  cy.get(carrosElements.alfaRomeo.description).should("contain.text", expecteddest);
  cy.get(carrosElements.alfaRomeo.price).should("contain.text", expectedprice);
});

Cypress.Commands.add("validarSuvVolvo", (expectedalt, expectedname, expecteddest, expectedprice) => {
  cy.get(carrosElements.volvoXC90.item).should("be.visible");
  cy.get(carrosElements.volvoXC90.image)
    .should("be.visible")
    .and("have.attr", "alt", expectedalt);
  cy.get(carrosElements.volvoXC90.name).should("contain.text", expectedname);
  cy.get(carrosElements.volvoXC90.description).should("contain.text", expecteddest);
  cy.get(carrosElements.volvoXC90.price).should("contain.text", expectedprice);
});

Cypress.Commands.add("validarSuvLamborghini", (expectedalt, expectedname, expecteddest, expectedprice) => {
  cy.get(carrosElements.Lamborghini.item).should("be.visible");
  cy.get(carrosElements.Lamborghini.image)
    .should("be.visible")
    .and("have.attr", "alt", expectedalt);
  cy.get(carrosElements.Lamborghini.name).should("contain.text", expectedname);
  cy.get(carrosElements.Lamborghini.description).should("contain.text", expecteddest);
  cy.get(carrosElements.Lamborghini.price).should("contain.text", expectedprice);
});

Cypress.Commands.add("validarSuvBmwX6", (expectedalt, expectedname, expecteddest, expectedprice) => {
  cy.get(carrosElements.bmwX6.item).should("be.visible");
  cy.get(carrosElements.bmwX6.image)
    .should("be.visible")
    .and("have.attr", "alt", expectedalt);
  cy.get(carrosElements.bmwX6.name).should("contain.text", expectedname);
  cy.get(carrosElements.bmwX6.description).should("contain.text", expecteddest);
  cy.get(carrosElements.bmwX6.price).should("contain.text", expectedprice);
});


Cypress.Commands.add("validarSuvMercedesG6", (expectedalt, expectedname, expecteddest, expectedprice) => {
  cy.get(carrosElements.mercedesG6.item).should("be.visible");
  cy.get(carrosElements.mercedesG6.image)
    .should("be.visible")
    .and("have.attr", "alt", expectedalt);
  cy.get(carrosElements.mercedesG6.name).should("contain.text", expectedname);
  cy.get(carrosElements.mercedesG6.description).should("contain.text", expecteddest);
  cy.get(carrosElements.mercedesG6.price).should("contain.text", expectedprice);
});


Cypress.Commands.add("validarSuvRangeRover", (expectedalt, expectedname, expecteddest, expectedprice) => {
  cy.get(carrosElements.rangeRover.item).should("be.visible");
  cy.get(carrosElements.rangeRover.image)
    .should("be.visible")
    .and("have.attr", "alt", expectedalt);
  cy.get(carrosElements.rangeRover.name).should("contain.text", expectedname);
  cy.get(carrosElements.rangeRover.description).should("contain.text", expecteddest);
  cy.get(carrosElements.rangeRover.price).should("contain.text", expectedprice);
});