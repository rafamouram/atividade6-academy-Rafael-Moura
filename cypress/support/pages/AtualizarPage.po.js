class AtualizarPage {

    clicarBotaoEditar() {
        cy.contains("button", "Editar").click();
    }
}

export var atualizarPage = new AtualizarPage();