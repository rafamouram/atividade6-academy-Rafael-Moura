class RemoverPage {

    clicarBotaoConfirmar() {
        cy.contains("button", "Confirmar").click();
    }

    verificarMensagemDeSucesso(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }

    clicarBotaoCancelar() {
        cy.contains("button", "Cancelar").click();
    }

    clicarBotaoX() {
        cy.get(".sc-jdAMXn.dBcBxJ").click();
    }
}


export var removerPage = new RemoverPage();