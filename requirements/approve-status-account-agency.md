# Atualizar Status da Conta

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **PATCH** na rota **/api/agencies/:agencyId**
2. ✅ **Valida** se existe uma conta atribuída ao usuário em estado **pendente**
3. ✅ **Valida** se a agência é a mesma da conta
4. ✅ **Valida** se o status da conta é **pendente**
5. ✅ **Atualizar** o status da conta para **aprovada**
6. ✅ Retorna **200** caso a conta tenha sido atualizada com sucesso

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **400** se o usuário não tiver uma conta atribuída
3. ✅ Retorna erro **400** se a agência não for igual a da conta
4. ✅ Retorna erro **400** se o status da conta não for **pendente**
5. ✅ Retorna erro **500** se der erro ao ocorrer algo com banco de dados