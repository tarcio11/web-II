# Atualizar

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **PUT** na rota **/api/users/userId**
2. ✅ **Valida** se existe um usuário com o userId fornecido
3. ✅ **Valida** se existe o email informado está disponível
4. ✅ **Atualizar** o usuário com os dados fornecidos
5. ✅ Retorna **200** com os dados do usuário cadastrado

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **400** se não existir um usuário com userId fornecido
3. ✅ Retorna erro **403** se o email não estiver disponível
4. ✅ Retorna erro **500** se der erro ao ocorrer algo com banco de dados