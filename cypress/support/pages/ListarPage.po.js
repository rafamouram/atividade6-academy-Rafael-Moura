class ListarPage {
    // Atributos da classe são os seletores da nossa tela

    visitar() {
        cy.visit("");
    }

    clicarBotaoNovo() {
        cy.contains("a", "Novo").click();
    }

    testarUrl() {
        cy.url().should("be.equal", "https://academy-crud-frontend.herokuapp.com/users/");
    }

    clicarBotaoVerDetalhes() {
        cy.contains("a", "Ver detalhes").click();
    }

    clicarBotaoLixeira() {
        cy.get('.hhNJgA').click();
    }

    clicarBotaoProxima() {
        cy.contains("button", "Próxima").click();
    }

    clicarBotaoAnterior() {
        cy.contains("button", "Anterior").click();
    }

    clicarBotaoRaro() {
        cy.get(".sc-dkzDqf.jbJCFN").click();
    }



}

export var listarPage = new ListarPage();