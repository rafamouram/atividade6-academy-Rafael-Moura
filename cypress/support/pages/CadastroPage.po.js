class CadastroPage {
    // Atributos da classe são os seletores da nossa tela
    inputEmail = "#email";
    inputNome = "#name";

    // Métodos da classe são os comandos que serão executados

    preencherEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    preencherNome(nome) {
        cy.get(this.inputNome).type(nome);
    }

    clicarBotaoSalvar() {
        cy.contains("button", "Salvar").click();
    }

    verificarMensagemUsuarioSalvo() {
        cy.contains("Usuário salvo com sucesso").should("be.visible");
    }

    verificarBotaoVoltar() {
        cy.contains("a", "Voltar").click();
    }

    preencherFormulario(tabela) {
        var dadosTabela = tabela.rowsHash();
        this.preencherEmail(dadosTabela.email);
        this.preencherNome(dadosTabela.nome);
    }

    verificarMensagemErro(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }
}
export var cadastroPage = new CadastroPage();