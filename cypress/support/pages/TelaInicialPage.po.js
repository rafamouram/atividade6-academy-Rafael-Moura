class TelaInicialPage {
    // Atributos da classe são os seletores da nossa tela

    visitar() {
        cy.visit("");
    }

    clicarBotaoNovo() {
        cy.contains("a", "Novo").click();
    }

    testarUrl() {
        cy.url().should("be.equal", "https://academy-crud-frontend.herokuapp.com/users");
    }

    clicarBotaoVerDetalhes() {
        cy.contains("a", "Ver detalhes").click();
    }

}

export var telaInicialPage = new TelaInicialPage();