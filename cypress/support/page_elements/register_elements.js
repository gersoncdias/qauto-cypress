export const registerElements = {
    modal: '[data-qa-id="qa_register_content"]',
    title: '[data-qa-id="qa_register_title"]',
    closeButton: '[data-qa-id="qa_register_close_button"]',
    nameInput: '[data-qa-id="qa_register_name"] input',
    surnameInput: '[data-qa-id="qa_register_surname"] input',
    phoneInput: '[data-qa-id="qa_register_phone"] input',
    emailInput: '[data-qa-id="qa_register_email"] input',
    passwordInput: '[data-qa-id="qa_register_password"] input',
    confirmPasswordInput: '[data-qa-id="qa_register_confirm_password"] input',
    genderMale: '[data-qa-id="qa_register_gender_male"] input',
    genderFemale: '[data-qa-id="qa_register_gender_female"] input',
    genderOther: '[data-qa-id="qa_register_gender_other"] input',
    stateSelect: '[data-qa-id="qa_register_state"] .MuiSelect-select',
    submitButton: '[data-qa-id="qa_register_submit"]',
    successTooltip: ".MuiAlert-message.css-127h8j3",
    errorName: '[id$="-helper-text"]:contains("Nome é obrigatório.")',
    errorSurname: '[id$="-helper-text"]:contains("Sobrenome é obrigatório.")',
    errorEmail: '[id$="-helper-text"]:contains("E-mail é obrigatório.")',
    errorPassword: '[id$="-helper-text"]:contains("Senha é obrigatória.")'
  };
  