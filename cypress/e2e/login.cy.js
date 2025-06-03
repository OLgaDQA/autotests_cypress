describe('проверка авторизации', function() {
  it('Верный логин и верный пароль', function() {
    cy.visit('http://login.qa.studio');
    cy.get('#forgotEmailButton').should('have.css', 'color','rgb(0, 85, 152)');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  });
   it('Восстановление пароля', function() {
    cy.visit('http://login.qa.studio');
    cy.get('#forgotEmailButton').should('have.css', 'color','rgb(0, 85, 152)');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  });
   it('Верный логин и неверный пароль', function() {
    cy.visit('http://login.qa.studio');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio5');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contain,('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  });
   it('Логин без @ и верный пароль', function() {
    cy.visit('http://login.qa.studio');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('germandolnikov.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contain,('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  });
  it('Неверный логин и верный пароль', function() {
    cy.visit('http://login.qa.studio');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
    cy.get('#mail').type('german@dolnikov.');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('german@dolnikov.');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contain,('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
});
 it('Проверка приведения логина к строчным буквам и успешной авторизации', function() {
  cy.visit('http://login.qa.studio');
  cy.get('#mail').type('GerMan@Dolnikov.ru');
  cy.get('#pass').type('iLoveqastudio1');
  cy.get('#loginButton').click();
  cy.get('#messageHeader').should('be.visible')
  cy.get('have.text').contain,('Авторизация прошла успешно');

  cy.get('#exitMessageButton > .exitIcon').should('be.visible');
});
})
  describe('Проверка покупки нового аватара', function () {
    it('Тест на покупку нового аватара для тренера', function () {
    cy.visit('https://pokemonbattle.ru/');
    cy.get('input[id="k_email"]').type('USER_LOGIN');
    cy.get('input[id="k_password"]').type('USER_PASSWORD');
    cy.get('button[type="submit"]').click();
    cy.get('.header_card_trainer', { timeout: 10000 }).should('be.visible');
    cy.get('.header_card_trainer').click();
    cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click();
    cy.get('.available > button').first().click();
    cy.get('.card_number').type('4620869113632996');
    cy.get('.card_csv').type('125');
    cy.get('.card_date').type('1226');
    cy.get('.card_name').type('German Dolnikov');
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
    cy.get('.style_1_base_input').type('56456');
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
    cy.get('.payment_status_top_title').should('be.visible');
  });
});
 

 


  
 







