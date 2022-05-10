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

    verificarMensagemUsuarioSalvo(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }

    preencherFormulario(tabela) {
        var dadosTabela = tabela.rowsHash();
        this.preencherEmail(dadosTabela.email);
        this.preencherNome(dadosTabela.nome);
    }

    verificarMensagemErro(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }

    clicarBotaoRaro() {
        cy.get(".sc-dkzDqf.jbJCFN").click();
    }

    testarUrl() {
        cy.url().should("be.equal", "https://academy-crud-frontend.herokuapp.com/users/novo");
    }

}
export var cadastroPage = new CadastroPage();