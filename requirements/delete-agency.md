# Delete

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **DELETE** na rota **/api/agencies/agencyId**
2. ✅ **Valida** se existe um agência com o agencyId fornecido
3. ✅ Retorna **200** com os dados do agência cadastrado

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **400** se não existir um agência com agencyId fornecido
3. ✅ Retorna erro **500** se der erro ao ocorrer algo com banco de dados