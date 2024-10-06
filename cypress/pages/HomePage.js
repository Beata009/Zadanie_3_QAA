class HomePage {
    clickMenuButton() {
        cy.get('.user-menu').click();  // Kliknięcie w menu użytkownika w prawym górnym rogu
    }

    clickLogoutButton() {
        cy.contains('Log out').click();  // Kliknięcie przycisku wylogowania
    }

    logout() {
        this.clickMenuButton();  // Otworzenie menu
        this.clickLogoutButton();  // Kliknięcie na "Log out"
    }
}

module.exports = new HomePage();  // Eksportowanie instancji klasy
