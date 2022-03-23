# Cadastro

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/signup**
2. ✅ Valida dados obrigatórios **name**, **email**, **password**, **cpf** e **address**
3. ✅ **Valida** se já existe um usuário com o email fornecido
4. ✅ Retorna **200** com os dados do usuário cadastrado

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **400** se name, email, password, cpf ou address não forem fornecidos pelo client
3. ✅ Retorna erro **403** se o email fornecido já estiver em uso
4. ✅ Retorna erro **500** se der erro ao ocorrer algo com banco de dados