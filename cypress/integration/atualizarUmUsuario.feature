Feature: Atualizar um usuário
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

    Background: Acessa o sistema e a tela de atualização de usuário
        Given que acessei a página de cadastro do usuário
        When preencho os dados do usuário
            | nome   | Rafael            | 
            | email  | rafalaa@gmail.com | 
        And clico no botão salvar
        Then visualizo uma mensagem de sucesso de cadastro
            | mensagem | Usuário salvo com sucesso |
         Given acessei a página inicial do sistema
         Given acessei a tela de atualizar usuário

@ignore
        Scenario: Atualizar usuário com sucesso
            When clico no botão editar
            When atualizo os dados do usuário com sucesso
            | nome   | Rafael            | 
            | email  | rafalaa@gmail.com | 
            And clico no botão salvar
            Then visualizo uma mensagem de sucesso       
@ignore
        Scenario: Atualizar um usuário sem colocar um email	
            When clico no botão editar
            When atualizo o campo nome
            | nome   | Rafael           |
            And apago o campo e-mail
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | O campo e-mail é obrigatório. |
 @ignore
        Scenario: Atualizar usuário sem colocar um nome	
            When clico no botão editar
            When atualizo o campo e-mail
            | email   | ratao@toma.com      |
            And apago o campo nome
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | O campo nome é obrigatório. |

@ignore
        Scenario: Atualizar usuário com email sem "@"	
            When clico no botão editar
            When atualizo os dados do usuário
            | nome   | Rafael         |
            | email  | rataotoma.com  |
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | Formato de e-mail inválido |
    
@ignore
        Scenario: Atualizar usuário com email sem ".com"	
            When clico no botão editar
            When atualizo os dados do usuário
            | nome   | Rafael         |
            | email  | rataotoma@     |
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | Formato de e-mail inválido |
@ignore
        Scenario: Atualizar usuário para email com mais de 60 caracteres	
            When clico no botão editar
            When atualizo os dados do usuário
            | nome   | Rafael                                                                   |
            | email  | rataotomarataotomarataotomarataotomarataotomarataotomarataotoma@oi.com     |
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | Informe no máximo 60 caracteres para o e-mail |
@ignore
        Scenario: Atualizar usuário para nome com mais de 100 caracteres	
            When clico no botão editar
            When atualizo os dados do usuário
            | nome   | RafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMoura |
            | email  | rataotoma@opa.com                                                                                                         |
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | Informe no máximo 100 caracteres para o nome |
@ignore
        Scenario: Atualizar um usuário com email já cadastrado no sistema
            When clico no botão editar
            When atualizo o campo nome
            | nome   | Lucas                |
            When atualizo o campo e-mail
            | email  | rafalaa@gmail.com   |
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | Este e-mail já é utilizado por outro usuário. | 
@ignore
        Scenario: Atualizar usuário para nome com menos de 4 caracteres
            When clico no botão editar
            When atualizo os dados do usuário
            | nome   | Raf        |
            | email  | raf@oi.com |
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | Informe pelo menos 4 letras para o nome. |
@ignore
        Scenario: Atualizar usuário para e-mail com menos de 4 caracteres
            When clico no botão editar
            When atualizo os dados do usuário
            | nome   | Rafael              |
            | email  | ra                  |
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | Informe pelo menos 4 caracteres para o e-mail. |
@ignore
        Scenario: Clicar no botão voltar
            When clico no botão voltar
            Then visualizo a página inicial do sistema

@ignore
        Scenario: Clicar no botão da Raro
            When clico no botão da Raro
            Then visualizo a página inicial do sistema