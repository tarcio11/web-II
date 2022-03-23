# Consultar Status da Conta

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **GET** na rota **/api/users/status-account/:userId**
2. ✅ **Valida** se existe uma conta atribuída ao usuário
3. ✅ **Valida** se o número da conta é do usuário que está tentando acessar
4. ✅ Retorna **200** com o status da conta caso esteja aprovada, ou **200** apenas com uma menagem caso a conta esteja pendente

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **400** se o usuário não tiver uma conta atribuída
3. ✅ Retorna erro **400** se o usuário não fornecer um número de conta válido
4. ✅ Retorna erro **500** se der erro ao ocorrer algo com banco de dados