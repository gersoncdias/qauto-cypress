import productData from "../../fixtures/produtos.json";
import paymentData from "../../fixtures/pagamento.json";

describe("Valida fluxo e componentes da Página de Pagamento", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.abrirModalProduto();
    cy.validaClickrBtnComprarModalProduto(
      productData.produto.detalhes.btn_comprar
    );
  });
  it("Valida as informações do produto na página de pagamento", () => {
    cy.validarInformacoesPagamento(paymentData.produto);
  });

  it("Valida pagamento em Boleto com sucesso", () => {
    cy.selecionarMetodoPagamento("boleto");
    cy.confirmarPagamento();
    cy.validarPagamentoSucesso(paymentData.mensagens.sucesso.boleto);
  });

  it("Valida pagamento com cartão de crédito com sucesso", () => {
    cy.selecionarMetodoPagamento("cartao");
    cy.selecionarBandeira(paymentData.cartao.bandeira);
    cy.preencherNumeroCartao(paymentData.cartao.numero);
    cy.preencherTitularCartao(paymentData.cartao.titular);
    cy.preencherValidadeCartao(paymentData.cartao.validade);
    cy.preencherCvcCartao(paymentData.cartao.cvv);
    cy.confirmarPagamento();
    cy.validarPagamentoSucesso(paymentData.mensagens.sucesso.cartao);
  });

  it("Valida Erro ao não preencher número do cartão", () => {
    cy.selecionarMetodoPagamento("cartao");
    cy.selecionarBandeira(paymentData.cartao.bandeira);
    cy.preencherTitularCartao(paymentData.cartao.titular);
    cy.preencherValidadeCartao(paymentData.cartao.validade);
    cy.preencherCvcCartao(paymentData.cartao.cvv);
    cy.confirmarPagamento();
    cy.validarErroCartaoNumero(paymentData.erros.cartao_numero);
  });

  it("Valida Erro ao não preencher nome do titular", () => {
    cy.selecionarMetodoPagamento("cartao");
    cy.selecionarBandeira(paymentData.cartao.bandeira);
    cy.preencherNumeroCartao(paymentData.cartao.numero);
    cy.preencherValidadeCartao(paymentData.cartao.validade);
    cy.preencherCvcCartao(paymentData.cartao.cvv);
    cy.confirmarPagamento();
    cy.validarErroCartaoTitular(paymentData.erros.cartao_titular);
  });

  it("Valida Erro ao não preencher validade do cartão", () => {
    cy.selecionarMetodoPagamento("cartao");
    cy.selecionarBandeira(paymentData.cartao.bandeira);
    cy.preencherNumeroCartao(paymentData.cartao.numero);
    cy.preencherTitularCartao(paymentData.cartao.titular);
    cy.preencherCvcCartao(paymentData.cartao.cvv);
    cy.confirmarPagamento();
    cy.validarErroCartaoValidade(paymentData.erros.cartao_validade);
  });

  it("Valida Erro ao não preencher CVV do cartão", () => {
    cy.selecionarMetodoPagamento("cartao");
    cy.selecionarBandeira(paymentData.cartao.bandeira);
    cy.preencherNumeroCartao(paymentData.cartao.numero);
    cy.preencherTitularCartao(paymentData.cartao.titular);
    cy.preencherValidadeCartao(paymentData.cartao.validade);
    cy.confirmarPagamento();
    cy.validarErroCartaoCvv(paymentData.erros.cartao_cvv);
  });
});
