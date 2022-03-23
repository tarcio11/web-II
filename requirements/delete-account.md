# Delete

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **DELETE** na rota **/api/accounts**
2. ✅ **Valida** se a conta existe
3. ✅ **Deletar** a conta com os dados obrigatórios
4. ✅ Retorna **200**, caso a conta seja deletada com sucesso

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **400** se a conta não existir
3. ✅ Retorna erro **500** se der erro ao ocorrer algo com banco de dados