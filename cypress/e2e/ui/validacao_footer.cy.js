import footerData from "../../fixtures/footer.json";

describe(' Valida a exibição do Footer em todas as páginas', () => {
    const paginas = ['/', '/sobre', '/ajuda','/carros/sedan', '/carros/suvs'];
  
    paginas.forEach((pagina) => {
      it(`Validar os elementos do footer na página ${pagina}`, () => {
        cy.visit(pagina);
        cy.validarSessaoFooter(footerData.footer);
      });
    });
  });