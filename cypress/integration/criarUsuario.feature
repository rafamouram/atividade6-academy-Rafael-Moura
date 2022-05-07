Feature: Criar Usuário
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Background: Acessa o sistema e a página de registro de usuário
        Given que acessei a página de cadastro do usuário

@ignore
        Scenario: Criar usuário sem preencher nome e e-mail
            When clico no botão salvar
            Then visualizo as mensagens de erro
            | mensagem_um   | O campo e-mail é obrigatório. |
            | mensagem_dois | O campo nome é obrigatório.   |

    @ignore
        Scenario: Cadastrar um novo usuário
            When preencho os dados do usuário
            | nome   | Rafael            | 
            | email  | rafalaa@gmail.com | 
            And clico no botão salvar
            Then visualizo uma mensagem de sucesso de cadastro
            | mensagem | Usuário salvo com sucesso |
  
@ignore
        Scenario: Cadastrar um novo usuário sem colocar um email	
           When preencho o campo nome
           | nome   | Rafael           |
           And clico no botão salvar
           Then visualizo uma mensagem de erro
           | mensagem | O campo e-mail é obrigatório. |
@ignore
        Scenario: Cadastrar um novo usuário sem colocar um nome	
            When preencho o campo email
            | email   | ratao@toma.com      |
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | O campo nome é obrigatório. |

@ignore
        Scenario: Cadastrar um novo usuário com email sem "@"	
            When preencho o campo nome
            | nome   | Rafael         |
            And clico no botão salvar
            And preencho o campo email
            | email  | rataotoma.com  |
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | Formato de e-mail inválido |
    
@ignore
        Scenario: Cadastrar um novo usuário com email sem ".com"	
            When preencho o campo nome
            | nome   | Rafael         |
            And clico no botão salvar
            And preencho o campo email
            | email  | rataotoma@     |
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | Formato de e-mail inválido |
@ignore
        Scenario: Cadastrar um novo usuário com email com mais de 60 caracteres	
           When preencho os dados do usuário
            | nome   | Rafael                                                                   |
            | email  | rataotomarataotomarataotomarataotomarataotomarataotomarataotoma@oi.com     |
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | Informe no máximo 60 caracteres para o e-mail |
@ignore
        Scenario: Cadastrar um novo usuário com nome com mais de 100 caracteres	
            When preencho os dados do usuário
            | nome   | RafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMoura |
            | email  | rataotoma@opa.com                                                                                                         |
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | Informe no máximo 100 caracteres para o nome |
@ignore
        Scenario: Cadastra um novo usuário com email já cadastrado
            When preencho os dados do usuário
            | nome   | Rafael                |
            | email  | rataotomoi@gmail.co   |
            And clico no botão salvar
            And espero um segundo
            When preencho os dados do usuário
            | nome   | Rafael                |
            | email  | rataotomoi@gmail.co   |
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | User already exists. | 
@ignore
        Scenario: Cadastrar usuário com nome com menos de 4 caracteres
            When preencho os dados do usuário
            | nome   | Raf        |
            | email  | raf@oi.com |
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | Informe pelo menos 4 letras para o nome. |
@ignore
        Scenario: Cadastrar usuário com e-mail com menos de 4 caracteres
            When preencho o campo nome
            | nome   | Rafaela                |
            And clico no botão salvar
            And preencho o campo email
            | email  | dra   |
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
