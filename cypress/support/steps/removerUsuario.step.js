import { listarPage } from '../pages/ListarPage.po';

import { removerPage } from '../pages/RemoverPage.po';

Given('acessei a tela inicial do sistema', () => {
    listarPage.visitar();
});

When('clico em confirmar', (texto) => {
    var dadosTexto = texto.rowsHash();
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users/**", {
        statusCode: 204
    });

    cy.clicarBotãoPorTexto(dadosTexto.texto);
});

Given('cliquei no botão de lixeira', () => {
    listarPage.clicarBotaoLixeira();
});

When('clico no botão de cancelar', (texto) => {
    var dadosTexto = texto.rowsHash();
    cy.clicarBotãoPorTexto(dadosTexto.texto);
});

When('clico no botão x', () => {
    removerPage.clicarBotaoX();
});

Then('visualizo a tela inicial', () => {
    listarPage.testarUrl2();
});

Then('visualizo uma mensagem de sucesso de remoção', (mensagem) => {
    var dadosMensagem = mensagem.rowsHash();
    removerPage.verificarMensagemDeSucesso(dadosMensagem.mensagem);
});