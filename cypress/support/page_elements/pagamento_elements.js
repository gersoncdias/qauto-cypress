export const paymentElements = {
    title: '[data-qa-id="payment-title"]',
    
    // Informações do carro
    carTitle: '[data-qa-id="payment-car-title"]',
    carName: '[data-qa-id="payment-car-name"]',
    carPrice: '[data-qa-id="payment-car-price"]',
    carBrand: '[data-qa-id="payment-car-brand"]',
    carYear: '[data-qa-id="payment-car-year"]',
  
    // Métodos de pagamento
    paymentMethodTitle: '[data-qa-id="payment-method-title"]',
    paymentCreditCard: '[data-qa-id="payment-method-credit-card"]',
    paymentBoleto: '[data-qa-id="payment-method-boleto"]',
  
    // Formulário do cartão
    cardBrandSelect: '[data-qa-id="payment-card-brand"]',
    cardNumberInput: '[data-qa-id="payment-card-number"] input',
    cardHolderInput: '[data-qa-id="payment-card-holder"] input',
    cardExpiryInput: '[data-qa-id="payment-card-expiry"] input',
    cardCvvInput: '[data-qa-id="payment-card-cvv"] input',
  
    // Mensagens de erro dos campos obrigatórios
    errorCardNumber: '[id$="-helper-text"]:contains("Número do cartão é obrigatório.")',
    errorCardHolder: '[id$="-helper-text"]:contains("Nome no cartão é obrigatório.")',
    errorCardExpiry: '[id$="-helper-text"]:contains("Validade é obrigatória.")',
    errorCardCvv: '[id$="-helper-text"]:contains("CVV é obrigatório.")',
  
    // Botões
    submitButton: '[data-qa-id="payment-submit-button"]',
    continueShoppingButton: '[data-qa-id="payment-continue-shopping-button"]',
  
    // Mensagens de sucesso e erro
    successMessage: '[data-qa-id="payment-success-message"]',
    errorMessage: '[data-qa-id="payment-error-message"]'
  };
  