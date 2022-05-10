// preg_replace("/[^0-9]/", "", $string);
import { listarPage } from '../pages/ListarPage.po';
import { cadastroPage } from '../pages/CadastroPage.po';

//import { atualizarPage } from '../pages/AtualizarPage.po';

Given("acessei a página inicial do sistema", () => {
    listarPage.visitar();
});

Given("não há usuários cadastrados", () => {
    listarPage.semUsuariosCadastrados();
});

Then("visualizo a mensagem de nenhum usuário cadastrado", (mensagem) => {
    listarPage.verificarSemUsuarios();
});

When("clico no botão para cadastrar um novo usuário", () => {
    listarPage.verificarCadastrarSemUsuarios();
});

Then("visualizo a página de cadastro de usuário", (mensagem) => {
    cadastroPage.testarUrl();
});

Then("visualizo a lista de usuários cadastrados", () => {
    listarPage.visualizarListaDeUsuarios();
});