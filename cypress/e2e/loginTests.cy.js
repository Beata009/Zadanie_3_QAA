const loginPage = require('../pages/Login');  // Import pliku ze stroną logowania
const homePage = require('../pages/HomePage');  // Import pliku ze stroną główną

describe('Login and Logout Tests', () => {

    it('should login and logout user888', () => {
        // Test 1: Logowanie jako user888
        loginPage.navigate();  // Przejście na stronę logowania
        loginPage.login('user888@gmail.com', '1234567890');  // Logowanie jako user888
        
        // Otwieramy menu i klikamy Log out
        homePage.logout();

        // Sprawdzenie czy wróciliśmy do strony logowania
        cy.url().should('include', '/account/login');
    });

    it('should login and logout testowyqa', () => {
        // Test 2: Logowanie jako testowyqa
        loginPage.navigate();  // Przejście na stronę logowania
        loginPage.login('testowyqa@qa.team', 'QA!automation-1');  // Logowanie jako testowyqa
        
        // Otwieramy menu i klikamy Log out
        homePage.logout();

        // Sprawdzenie czy wróciliśmy do strony logowania
        cy.url().should('include', '/account/login');
    });

});
