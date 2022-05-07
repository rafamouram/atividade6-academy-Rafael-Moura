import { telaInicialPage } from '../pages/telaInicialPage.po';

import { atualizarPage } from '../pages/AtualizarPage.po';

Given("acessei a tela inicial do sistema", () => {
    telaInicialPage.visitar();
});

And("acessei a tela de atualizar usuário", () => {
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
    atualizarPage.atualizarFormulario(tabela);
});

Then("visualizo uma mensagem de sucesso", () => {
    atualizarPage.verificarMensagemUsuarioAtualizado();
});

When("preencho o campo nome", (nome) => {
    var dadoNome = nome.rowsHash();
    atualizarPage.atualizarNome(dadoNome.nome);
});

When("preencho o campo email", (email) => {
    var dadoEmail = email.rowsHash();
    atualizarPage.atualizarEmail(dadoEmail.email);
});

Then("visualizo uma mensagem de erro", (mensagem) => {
    var dadoMensagem = mensagem.rowsHash();
    atualizarPage.verificarMensagemErro(dadoMensagem.mensagem);
});

And("clico no botão salvar", () => {
    atualizarPage.clicarBotaoSalvar();
});

And("espero um segundo", () => {
    cy.wait(1000);
});

When("clico no botão voltar", () => {
    atualizarPage.verificarBotaoVoltar();
});

When("clico no botão da Raro", () => {
    atualizarPage.clicarBotaoRaro();
});

Then("visualizo a página inicial do sistema", () => {
    telaInicialPage.testarUrl();
});

When("apago o campo e-mail", () => {
    atualizarPage.apagarEmail();
});

When("apago o campo nome", () => {
    atualizarPage.apagarNome();
});