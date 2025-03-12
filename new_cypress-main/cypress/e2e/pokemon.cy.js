describe('Покупка аватара', function () {                                
    it(' Тест на покупку нового аватара ', function () {   
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/

         cy.get('input[type="email"]').type('d0n.laura@yandex.ru');      // вводим логин
         cy.get('input[type="password"]').type('Donbaton01');            // вводим пароль
         cy.get('button[type="submit"]').click({ force: true });         // нажимаем кнопку "Войти"

         cy.wait(2000);                                                  //Ожидание

         cy.get('.header__container > .header__id').click({ force: true }); // Нажимаем на аву тренера
         cy.get('[href="/shop"]').click();                               // нажимаем кнопку "Смена аватара"
         cy.get(':nth-child(2) > .shop__button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
         
         cy.get('.credit').type('4243327207405412');                     // вводим номер карты
         cy.get('.k_input_ccv').type('233');                             // вводим CVV карты
         cy.get('.k_input_date').type('12/25');                          // вводим срок действия карты
         cy.get('.k_input_name').type('Joao Timonen');                   // вводим имя владельца карты

         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить

         
     });
 });