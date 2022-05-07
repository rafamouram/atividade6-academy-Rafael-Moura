import { telaInicialPage } from '../pages/telaInicialPage.po';

import { cadastroPage } from '../pages/CadastroPage.po';

import { atualizarPage } from '../pages/AtualizarPage.po';

Given("que acessei a página de atualizar usuário", () => {
    telaInicialPage.visitar();
    telaInicialPage.clicarBotaoVerDetalhes();
});

When("clico no botão editar", () => {
    atualizarPage.clicarBotaoEditar();
});

Given("preencho os dados do usuário", (tabela) => {
    // cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", [{
    //     method: "POST",
    //     body: {
    //         name: dadosTabela.nome,
    //         email: dadosTabela.email,
    //     }
    // }]);
    cadastroPage.preencherFormulario(tabela);
});

Then("visualizo uma mensagem de sucesso", () => {
    cadastroPage.verificarMensagemUsuarioSalvo();
});

When("preencho o campo nome", (nome) => {
    var dadoNome = nome.rowsHash();
    cadastroPage.preencherNome(dadoNome.nome);
});

When("preencho o campo email", (email) => {
    var dadoEmail = email.rowsHash();
    cadastroPage.preencherEmail(dadoEmail.email);
});

Then("visualizo uma mensagem de erro", (mensagem) => {
    var dadoMensagem = mensagem.rowsHash();
    cadastroPage.verificarMensagemErro(dadoMensagem.mensagem);
});

And("clico no botão salvar", () => {
    cadastroPage.clicarBotaoSalvar();
});

And("espero um segundo", () => {
    cy.wait(1000);
});

When("clico no botão voltar", () => {
    cadastroPage.verificarBotaoVoltar();
});

Then("visualizo a página de login", () => {
    telaInicialPage.testarUrl();
});