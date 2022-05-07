Feature: Remover um usuário
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Background: Base url e Define usuário aleatório
        Given acessei a tela inicial do sistema
        And acessei a tela de atualizar usuário

@ignore
        Scenario: Atualizar usuário com sucesso
            When clico no botão editar
            When preencho os dados do usuário
            | nome   | Rafael            | 
            | email  | rafalaa@gmail.com | 
            And clico no botão salvar
            Then visualizo uma mensagem de sucesso       
@ignore
        Scenario: Atualizar um usuário sem colocar um email	
            When clico no botão editar
            When preencho o campo nome
            | nome   | Rafael           |
            And apago o campo e-mail
            And clico no botão salvar
            Then visualizo uma mensagem de erro
            | mensagem | O campo e-mail é obrigatório. |