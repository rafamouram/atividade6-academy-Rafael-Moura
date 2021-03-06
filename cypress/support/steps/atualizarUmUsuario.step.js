import { listarPage } from '../pages/ListarPage.po';

import { atualizarPage } from '../pages/AtualizarPage.po';

import { cadastroPage } from '../pages/CadastroPage.po';

Given("acessei a tela inicial do sistema", () => {
    listarPage.visitar();
});

And("acessei a tela de atualizar usuário", (texto) => {
    var dadosTexto = texto.rowsHash();
    cy.clicarLinkPorTexto(dadosTexto.texto);
});

And("acessei a tela de atualizar usuário 2", () => {
    listarPage.clicarBotaoVerDetalhes2();
});

When("clico no botão editar", (texto) => {
    var dadosTexto = texto.rowsHash();
    cy.clicarBotãoPorTexto(dadosTexto.texto);

});

Given("preencho os dados do usuário", (tabela) => {
    cadastroPage.preencherFormulario(tabela);
    var dadosTabela = tabela.rowsHash();
    cy.intercept("POST", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 201,
        body: [{
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "name": dadosTabela.nome,
            "email": dadosTabela.email,
            "createdAt": "2022-05-07T13:19:35.351Z",
            "updatedAt": "2022-05-07T13:19:35.351Z"
        }]
    });
});

Given("atualizo os dados do usuário com sucesso", (tabela) => {
    atualizarPage.atualizarFormulario(tabela);
    var dadosTabela = tabela.rowsHash();
    cy.intercept("PUT", "https://crud-api-academy.herokuapp.com/api/v1/users/**", {
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

Given("atualizo os dados do usuário", (tabela) => {
    atualizarPage.atualizarFormulario(tabela);
});

Then("visualizo uma mensagem de sucesso", () => {
    atualizarPage.verificarMensagemUsuarioAtualizado();
});

Then("visualizo uma mensagem de erro", (mensagem) => {
    var dadoMensagem = mensagem.rowsHash();
    atualizarPage.verificarMensagemErro(dadoMensagem.mensagem);
});

And("clico no botão salvar", (texto) => {
    var dadosTexto = texto.rowsHash();
    cy.clicarBotãoPorTexto(dadosTexto.texto);
});

When("clico no botão voltar", (texto) => {
    var dadosTexto = texto.rowsHash();
    cy.clicarLinkPorTexto(dadosTexto.texto);
});

When("clico no botão da Crud", () => {
    atualizarPage.clicarBotaoCrud();
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

When("clico no botão cancelar", (texto) => {
    var dadosTexto = texto.rowsHash();
    cy.clicarBotãoPorTexto(dadosTexto.texto);
});

Then("visualizo a tela de atualizar usuário", () => {
    cy.contains('id');
});

When("atualizo o campo e-mail com um e-mail já existente", (email) => {
    var dadoEmail = email.rowsHash();
    atualizarPage.atualizarEmail(dadoEmail.email);
    cy.intercept("PUT", "https://crud-api-academy.herokuapp.com/api/v1/users/**", {
        statusCode: 422
    });
});