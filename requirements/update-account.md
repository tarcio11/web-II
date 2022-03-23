# Atualizar

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **PUT** na rota **/api/accounts/accountId**
2. ✅ **Valida** se a conta existe
3. ❌ **Valida** se o usuário é dono da conta
4. ✅ **Atualizar** o usuário com os dados fornecidos
5. ✅ Retorna **200** caso a conta seja atualizada com sucesso

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **400** se não existir a conta
3. ❌ Retorna erro **400** se o usuário não for dono da conta
4. ✅ Retorna erro **500** se der erro ao ocorrer algo com banco de dados