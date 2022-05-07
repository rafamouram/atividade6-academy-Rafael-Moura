import { listarPage } from '../pages/ListarPage.po';

import { removerPage } from '../pages/RemoverPage.po';

Given('acessei a tela inicial do sistema', () => {
    listarPage.visitar();
});

When('clico em confirmar', () => {
    removerPage.clicarBotaoConfirmar();
});

Given('cliquei no botão de lixeira', () => {
    listarPage.clicarBotaoLixeira();
});

When('clico no botão de cancelar', () => {
    removerPage.clicarBotaoCancelar();
});

When('clico no botão x', () => {
    removerPage.clicarBotaoX();
});

Then('visualizo a tela inicial', () => {
    listarPage.testarUrl();
});

Then('visualizo uma mensagem de sucesso de remoção', (mensagem) => {
    var dadosMensagem = mensagem.rowsHash();
    removerPage.verificarMensagemDeSucesso(dadosMensagem.mensagem);
});