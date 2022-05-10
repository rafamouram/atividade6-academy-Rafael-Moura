class RemoverPage {

    verificarMensagemDeSucesso(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }

    clicarBotaoX() {
        cy.get(".sc-jdAMXn.dBcBxJ").click({ force: true });
    }
}


export var removerPage = new RemoverPage();