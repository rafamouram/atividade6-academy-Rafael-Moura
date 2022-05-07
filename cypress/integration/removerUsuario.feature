Feature: Deletar um usuario
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Background: Acessa o sistema
        Given acessei a tela inicial do sistema
        Given cliquei no botão de lixeira

#@ignore
        Scenario: Remover usuário com sucesso
            When clico em confirmar
            Then visualizo uma mensagem de sucesso de remoção
            | mensagem | Usuário removido! |       
#@ignore
        Scenario: Cancelar a remoção de um usuário através do botão cancelar
            When clico no botão de cancelar
            Then visualizo a tela inicial	 

#@ignore
        Scenario: Cancelar a remoção de um usuário através do botão x
            When clico no botão x
            Then visualizo a tela inicial	