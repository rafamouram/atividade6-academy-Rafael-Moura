import { listarPage } from '../pages/ListarPage.po';

import { cadastroPage } from '../pages/CadastroPage.po';

Given("que acessei a página de cadastro do usuário", () => {
    listarPage.visitar();
    listarPage.clicarBotaoNovo();
    cy.url().should("be.equal", "https://academy-crud-frontend.herokuapp.com/users/novo");
});

Given("preencho os dados do usuário", (tabela) => {
    cadastroPage.preencherFormulario(tabela);
    var dadosTabela = tabela.rowsHash();
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
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

Given("preencho os dados do usuário com email já cadastrado", (tabela) => {
    cadastroPage.preencherFormulario(tabela);
    var dadosTabela = tabela.rowsHash();
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 422,
    });
});

Then("visualizo uma mensagem de sucesso de cadastro", (mensagem) => {
    var dadoMensagem = mensagem.rowsHash();
    cadastroPage.verificarMensagemUsuarioSalvo(dadoMensagem.mensagem);
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

When("clico no botão da Raro", () => {
    atualizarPage.clicarBotaoRaro();
});

Then("visualizo a página inicial do sistema", () => {
    listarPage.testarUrl();
});

Then("visualizo as mensagens de erro", (tabela) => {
    var dadoTabela = tabela.rowsHash();
    cadastroPage.verificarMensagemErro(dadoTabela.mensagem_um);
    cadastroPage.verificarMensagemErro(dadoTabela.mensagem_dois);
});