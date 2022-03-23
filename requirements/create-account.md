# Cadastro

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/accounts**
2. ✅ **Valida** dados obrigatórios **agency_id**, **user_id**, **rg_client** e **cpf_client**
3. ✅ **Valida** se existe uma conta atribuída ao usuário com o cpf informado
4. ✅ **Cadastrar** a conta com os dados obrigatórios
5. ✅ Retorna **201** com uma mensagem de sucesso

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **400** se agency_id, user_id, rg_client ou cpf_client não forem fornecidos pelo client
3. ✅ Retorna erro **403** se já existir uma conta atribuída ao usuário com o cpf informado
4. ✅ Retorna erro **500** se der erro ao ocorrer algo com banco de dados