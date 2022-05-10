Feature: Atualizar um usuário
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

    Background: Acessa o sistema, cria um usuário e acessa a tela de atualização de usuário
    # Criando um usuário para que o teste possa ser executado    
        Given que acessei a página de cadastro do usuário
        When preencho os dados do usuário corretamente
            | nome   | Rafael            | 
            | email  | rafalaa@gmail.com | 
        And clico no botão salvar
            | texto | Salvar |
    # Acessando a tela de atualização de usuário
        When clico no botão da Crud
        Given acessei a tela de atualizar usuário
            | texto | Ver detalhes |

    #@ignore
        Scenario: Atualizar usuário com sucesso
            When clico no botão editar
            | texto | Editar |
            When atualizo os dados do usuário com sucesso
            | nome   | Rafael            | 
            | email  | rafalaa@gmail.com | 
            And clico no botão salvar
            | texto | Salvar |
            Then visualizo uma mensagem de sucesso       
    #@ignore
        Scenario: Atualizar um usuário sem colocar um email	
            When clico no botão editar
            | texto | Editar |
            When atualizo o campo nome
            | nome   | Rafael           |
            And apago o campo e-mail
            And clico no botão salvar
            | texto | Salvar |
            Then visualizo uma mensagem de erro
            | mensagem | O campo e-mail é obrigatório. |
    #@ignore
        Scenario: Atualizar usuário sem colocar um nome	
            When clico no botão editar
            | texto | Editar |
            When atualizo o campo e-mail
            | email   | ratao@toma.com      |
            And apago o campo nome
            And clico no botão salvar
            | texto | Salvar |
            Then visualizo uma mensagem de erro
            | mensagem | O campo nome é obrigatório. |

    #@ignore
        Scenario: Atualizar usuário com email sem "@"	
            When clico no botão editar
            | texto | Editar |
            When atualizo os dados do usuário
            | nome   | Rafael         |
            | email  | rataotoma.com  |
            And clico no botão salvar
            | texto | Salvar |
            Then visualizo uma mensagem de erro
            | mensagem | Formato de e-mail inválido |
    
    #@ignore
        Scenario: Atualizar usuário com email sem ".com"	
            When clico no botão editar
            | texto | Editar |
            When atualizo os dados do usuário
            | nome   | Rafael         |
            | email  | rataotoma@     |
            And clico no botão salvar
            | texto | Salvar |
            Then visualizo uma mensagem de erro
            | mensagem | Formato de e-mail inválido |
    #@ignore
        Scenario: Atualizar usuário para email com mais de 60 caracteres	
            When clico no botão editar
            | texto | Editar |
            When atualizo os dados do usuário
            | nome   | Rafael                                                                   |
            | email  | rataotomarataotomarataotomarataotomarataotomarataotomarataotoma@oi.com     |
            And clico no botão salvar
            | texto | Salvar |
            Then visualizo uma mensagem de erro
            | mensagem | Informe no máximo 60 caracteres para o e-mail |
    #@ignore
        Scenario: Atualizar usuário para nome com mais de 100 caracteres	
            When clico no botão editar
            | texto | Editar |
            When atualizo os dados do usuário
            | nome   | RafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMouraRafaelMoura |
            | email  | rataotoma@opa.com                                                                                                         |
            And clico no botão salvar
            | texto | Salvar |
            Then visualizo uma mensagem de erro
            | mensagem | Informe no máximo 100 caracteres para o nome |
    #@ignore
        Scenario: Atualizar um usuário com email já cadastrado no sistema
            # Criando usuário para teste, tendo certeza que tem ao menos dois usuários cadastrados 
            Given acessei a página inicial do sistema
            Given que acessei a página de cadastro do usuário
            When preencho os dados do usuário corretamente
            | nome   | Rafael            | 
            | email  | rafael@gmail.com | 
            And clico no botão salvar
            | texto | Salvar |

            # Acessando a tela de atualização de usuário
            Given acessei a página inicial do sistema
            Given acessei a tela de atualizar usuário
            | texto | Ver detalhes |

            #Atualizando usuário com email já cadastrado no sistema
            When clico no botão editar
            | texto | Editar |
            When atualizo o campo nome
            | nome   | Lucas                |
            When atualizo o campo e-mail com um e-mail já existente
            | email  | rafael@gmail.com   |
            And clico no botão salvar
            | texto | Salvar |
            Then visualizo uma mensagem de erro
            | mensagem | Este e-mail já é utilizado por outro usuário. | 
    #@ignore
        Scenario: Atualizar usuário para nome com menos de 4 caracteres
            When clico no botão editar
            | texto | Editar |
            When atualizo os dados do usuário
            | nome   | Raf        |
            | email  | raf@oi.com |
            And clico no botão salvar
            | texto | Salvar |
            Then visualizo uma mensagem de erro
            | mensagem | Informe pelo menos 4 letras para o nome. |
    #@ignore
        Scenario: Atualizar usuário para e-mail com menos de 4 caracteres
            When clico no botão editar
            | texto | Editar |
            When atualizo os dados do usuário
            | nome   | Rafael              |
            | email  | ra                  |
            And clico no botão salvar
            | texto | Salvar |
            Then visualizo uma mensagem de erro
            | mensagem | Informe pelo menos 4 caracteres para o e-mail. |
    #@ignore
        Scenario: Clicar no botão voltar
            When clico no botão voltar
            | texto | Voltar |
            Then visualizo a página inicial do sistema

    #@ignore
        Scenario: Clicar no botão da Crud
            When clico no botão da Crud
            Then visualizo a página inicial do sistema

    #@ignore
        Scenario: Cancelar a atualização de um usuário
            When clico no botão editar
            | texto | Editar |
            When atualizo os dados do usuário
            | nome   | Rafael         |
            | email  | rataotoma@gmail.com     |
            And clico no botão cancelar
            | texto | Cancelar |
            Then visualizo a tela de atualizar usuário