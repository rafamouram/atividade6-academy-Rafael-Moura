Feature: Deletar um usuario
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Background: Acessa o sistema e cria um usuário
    # Criando usuário para ter certeza que há ao menos um usuário cadastrado
        Given que acessei a página de cadastro do usuário
        When preencho os dados do usuário
        | nome   | Rafael            | 
        | email  | rafalaa@gmail.com | 
        And clico no botão salvar
        | texto | Salvar |
        Then visualizo uma mensagem de sucesso de cadastro
        | mensagem | Usuário salvo com sucesso |
    # Acessando a área de remoção de usuário
        Given acessei a tela inicial do sistema
        Given cliquei no botão de lixeira

    #@ignore
        Scenario: Remover usuário com sucesso
            When clico em confirmar
            | texto | Confirmar |
            Then visualizo uma mensagem de sucesso de remoção
            | mensagem | Usuário removido! |       
    #@ignore
        Scenario: Cancelar a remoção de um usuário através do botão cancelar
            When clico no botão de cancelar
            | texto | Cancelar |
            Then visualizo a tela inicial	 

    #@ignore
        Scenario: Cancelar a remoção de um usuário através do botão x
            When clico no botão x
            Then visualizo a tela inicial	