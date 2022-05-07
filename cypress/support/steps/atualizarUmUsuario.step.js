import { listarPage } from '../pages/ListarPage.po';

import { atualizarPage } from '../pages/AtualizarPage.po';

Given("acessei a tela inicial do sistema", () => {
    listarPage.visitar();
});

And("acessei a tela de atualizar usuário", () => {
    listarPage.clicarBotaoVerDetalhes();
});

When("clico no botão editar", () => {
    atualizarPage.clicarBotaoEditar();
});

Given("atualizo os dados do usuário", (tabela) => {
    atualizarPage.atualizarFormulario(tabela);
    var dadosTabela = tabela.rowsHash();
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200,
        body: [{
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": dadosTabela.nome,
            "email": dadosTabela.email,
            "createdAt": "2022-05-07T13:19:35.351Z",
            "updatedAt": "2022-05-07T13:19:35.351Z"
        }]
    });
});

Then("visualizo uma mensagem de sucesso", () => {
    atualizarPage.verificarMensagemUsuarioAtualizado();
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
    listarPage.testarUrl();
});

When("apago o campo e-mail", () => {
    atualizarPage.apagarEmail();
});

When("apago o campo nome", () => {
    atualizarPage.apagarNome();
});

When("atualizo o campo e-mail", (email) => {
    var dadoEmail = email.rowsHash();
    atualizarPage.atualizarEmail(dadoEmail.email);
});

When("atualizo o campo nome", (nome) => {
    var dadoNome = nome.rowsHash();
    atualizarPage.atualizarNome(dadoNome.nome);
});