Feature: Listar usuários cadastrados
   Como uma pessoa qualquer
   Desejo consultar todos os usuários cadastrados
   Para ter as informações de todos os usuários  

    Background: Acessar o sistema
        Given acessei a página inicial do sistema

    Scenario: Listar usuários cadastrados
        Then visualizo a lista de usuários cadastrados

    # Scenario: Avançar para a próxima página	
    #     When  clico no botão Próxima
    #     Then visualizo a próxima página

    # Scenario: Voltar para a página anterior
    #     When  clico no botão Anterior
    #     Then visualizo a página anterior

    # Scenario: Não é possível avançar para a próxima página quando estou na última página
    #     Given estou na última página
    #     When  clico no botão Próxima
    #     Then visualizo a última página

    # Scenario: Não é possível voltar para a página anterior quando estou na primeira página
    #     Given estou na primeira página 
    #     When  clico no botão Anterior
    #     Then visualizo a primeira página

@ignore
    Scenario: Não há usuários cadastrados
        Given não há usuários cadastrados
        Then visualizo a mensagem de nenhum usuário cadastrado

        When clico no botão para cadastrar um novo usuário
        Then visualizo a página de cadastro de usuário