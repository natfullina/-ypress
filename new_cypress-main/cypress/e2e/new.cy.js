describe('Авторизация', function () {

    it('Валидный логин и пароль', function () {
         cy.visit('https://login.qa.studio');  //Зайти на сайт

         cy.get('#mail').type('german@dolnikov.ru')  //Ввести правильный логин
         cy.get('#pass').type('iLoveqastudio1')  // Ввесли правильный пароль
         cy.get('#loginButton').click();  //Нажать войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно');   //Проверить нужный текст
         cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверить наличие кнопки крестик и он виден пользователю
     })
     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio');  //Зайти на сайт

        cy.get('#mail').type('german@dolnikov.ru')  //Ввести правильный логин
        cy.get('#pass').type('iLove')  // Ввесли неверный пароль
        cy.get('#loginButton').click();  //Нажать войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');   //Проверить нужный текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверить наличие кнопки крестик и он виден пользователю
    })
    it('Не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio');  //Зайти на сайт

        cy.get('#mail').type('man@dolnikov.ru')  //Ввести не верный логин. 
        cy.get('#pass').type('iLoveqastudio1')  // Ввесли верный пароль
        cy.get('#loginButton').click();  //Нажать войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');   //Проверить нужный текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверить наличие кнопки крестик и он виден пользователю
    })

    it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio');  //Зайти на сайт

        cy.get('#mail').type('germandolnikov.ru')  //Ввести не верный логин. Пропустили @
        cy.get('#pass').type('iLoveqastudio1')  // Ввесли верный пароль
        cy.get('#loginButton').click();  //Нажать войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');   //Проверить нужный текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверить наличие кнопки крестик и он виден пользователю
    })
    it('Логин c заглавными буквами  и верный пароль', function () {
        cy.visit('https://login.qa.studio');  //Зайти на сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru')  //Ввести не верный логин. Пропустили @
        cy.get('#pass').type('iLoveqastudio1')  // Ввесли верный пароль
        cy.get('#loginButton').click();  //Нажать войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверить нужный текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверить наличие кнопки крестик и он виден пользователю
    })
    it('Забыли пароль', function () {
        cy.visit('https://login.qa.studio');  //Зайти на сайт

        cy.get('#forgotEmailButton').click(); //Нажать на кнопку "забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru')  //Ввести правильный логин
        cy.get('#restoreEmailButton').click(); //Нажать на "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверить нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})