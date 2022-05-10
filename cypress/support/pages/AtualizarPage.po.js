class AtualizarPage {

    inputEmail = "#userEmail";
    inputNome = "#userName";

    atualizarEmail(email) {
        this.apagarEmail();
        cy.get(this.inputEmail).type(email);
    }

    atualizarNome(nome) {
        this.apagarNome();
        cy.get(this.inputNome).clear().type(nome);
    }

    apagarEmail() {
        cy.get(this.inputEmail).clear();
    }

    apagarNome() {
        cy.get(this.inputNome).clear();
    }

    verificarMensagemUsuarioAtualizado() {
        cy.contains("Informações atualizadas com sucesso").should("be.visible");
    }

    clicarBotaoCrud() {
        cy.get(".sc-dkzDqf.jbJCFN").click();
    }

    atualizarFormulario(tabela) {
        var dadosTabela = tabela.rowsHash();
        this.atualizarEmail(dadosTabela.email);
        this.atualizarNome(dadosTabela.nome);
    }

    verificarMensagemErro(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }
}

export var atualizarPage = new AtualizarPage();