import productData from "../../fixtures/produtos.json";

describe("Valida a exibição e informações do Modal de Produto", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.abrirModalProduto();
  });

  it("Validar Imagem do modal de produto", () => {
    cy.validarImagemModalProduto();
  });

  it("Validar Titulo do modal de produto", () => {
    cy.validarTituloModalProduto(productData.produto.titulo);
  });

  it("Validar Descricão do modal de produto", () => {
    cy.validarDescricaoModalProduto(productData.produto.descricao);
  });

  it("Validar Marca do modal de produto", () => {
    cy.validarMarcaModalProduto(productData.produto.detalhes.brand);
  });

  it("Validar Ano do modal de produto", () => {
    cy.validarAnolProduto(productData.produto.detalhes.year);
  });

  it("Validar Potencia do modal de produto", () => {
    cy.validarPotenciaModalProduto(productData.produto.detalhes.power);
  });

  it("Validar Preço do modal de produto", () => {
    cy.validarPrecoModalProduto(productData.produto.detalhes.price);
  });

  it("Validar botão comprar agora", () => {
    cy.validarBtnComprarModalProduto(productData.produto.detalhes.btn_comprar);
  });

  it("Validar Fechar Modal de Produto", () => {
    cy.fecharModalProduto();
  });
});
