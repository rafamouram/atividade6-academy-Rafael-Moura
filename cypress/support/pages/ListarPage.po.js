class ListarPage {
    // Atributos da classe são os seletores da nossa tela

    visitar() {
        cy.visit("");
    }

    testarUrl() {
        cy.url().should("be.equal", "https://academy-crud-frontend.herokuapp.com/users");
    }

    testarUrl2() {
        cy.url().should("be.equal", "https://academy-crud-frontend.herokuapp.com/users/");
    }

    clicarBotaoLixeira() {
        cy.get('.hhNJgA').click();
    }

    clicarBotaoRaro() {
        cy.get(".sc-dkzDqf.jbJCFN").click();
    }

    semUsuariosCadastrados() {
        cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
            statusCode: 200,
            body: []
        });
    }

    verificarSemUsuarios() {
        cy.contains("Ops! Não existe nenhum usuário para ser exibido.");
    }

    verificarCadastrarSemUsuarios() {
        cy.contains("p", "Cadastre um novo usuário").click();
    }

    visualizarListaDeUsuarios() {
        cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
            statusCode: 200,
            body: [{
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "name": "Name Surname",
                "email": "user@example.com",
                "createdAt": "2022-05-07T14:33:51.582Z",
                "updatedAt": "2022-05-07T14:33:51.582Z"
            }]
        });
        cy.contains("Name Surname");
        cy.contains("user@example.com")
    }
}

export var listarPage = new ListarPage();