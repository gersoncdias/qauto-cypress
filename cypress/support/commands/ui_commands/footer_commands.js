import { footerElements } from "../../page_elements/footer_elements.js";

Cypress.Commands.add('validarSessaoFooter', (expectedText) => {
    cy.get(footerElements.footer.container).should('be.visible');
    
    cy.get(footerElements.footer.logo)
      .should('be.visible')
      .and('have.attr', 'alt', expectedText.logo_alt);
  
    cy.get(footerElements.footer.address)
      .should('be.visible')
      .and('contain.text', expectedText.address);
  
    cy.get(footerElements.footer.phone)
      .should('be.visible')
      .and('contain.text', expectedText.phone);
  
    cy.get(footerElements.footer.disclaimer)
      .should('be.visible')
      .and('contain.text', expectedText.disclaimer);
  
    cy.get(footerElements.footer.copyright)
      .should('be.visible')
      .and('contain.text', expectedText.copyright);
  });;