import { telaInicialPage } from '../pages/TelaInicialPage.po';

import { removerPage } from '../pages/RemoverPage.po';

Given('acessei a tela inicial do sistema', () => {
    telaInicialPage.visitar();
});

When('clico em confirmar', () => {
    removerPage.clicarBotaoConfirmar();
});

Given('cliquei no botão de lixeira', () => {
    telaInicialPage.clicarBotaoLixeira();
});

When('clico no botão de cancelar', () => {
    removerPage.clicarBotaoCancelar();
});

When('clico no botão x', () => {
    removerPage.clicarBotaoX();
});

Then('visualizo a tela inicial', () => {
    telaInicialPage.testarUrl();
});

Then('visualizo uma mensagem de sucesso de remoção', (mensagem) => {
    var dadosMensagem = mensagem.rowsHash();
    removerPage.verificarMensagemDeSucesso(dadosMensagem.mensagem);
});