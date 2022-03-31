# Cadastro

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/cards/:userId**
2. ❌ **Valida** dados obrigatórios **user_id**, **account_id** e **type**
3. ✅ **Valida** se existe uma conta com o id informado
3. ✅ **Valida** se o usuário informado é o mesmo que da conta informada
3. ✅ **Valida** se o tipo da conta é válido
4. ✅ **Cadastrar** o cartão com os dados informados
5. ✅ Retorna **201** com uma mensagem de sucesso

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ❌ Retorna erro **400** se user_id, account_id ou type não forem fornecidos pelo client
3. ✅ Retorna erro **400** se nao existir uma conta com o id informado
4. ✅ Retorna erro **400** se nao existir um usuário com o id informado
5. ✅ Retorna erro **400** se o tipo da conta não for válido
4. ✅ Retorna erro **500** se der erro ao ocorrer algo com banco de dados