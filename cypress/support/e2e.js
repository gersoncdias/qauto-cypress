import './commands/ui_commands/home_commands';
import './commands/ui_commands/sobre_commands';
import './commands/ui_commands/footer_commands';
import './commands/ui_commands/carros_commands';
import './commands/ui_commands/ajuda_commands';
import './commands/ui_commands/login_commands';
import './commands/ui_commands/register_commands';
import './commands/ui_commands/produtos_commands';
import './commands/ui_commands/pagamento_commands';
import './commands/ui_commands/header_commands';
import './commands/api_commands/user_commands.js';
import './commands/api_commands/help_commands.js';
import './commands/api_commands/login_commands.js';
import './commands/api_commands/newsletter_commands.js';
Cypress.on('uncaught:exception', () => {
    return false
  })

  