# Cadastro

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/agencies**
2. ✅ **Valida** dados obrigatórios **number**, **address**
3. ✅ **Valida** se existe uma agência com o mesmo numero
4. ✅ **Cadastrar** a agência com os dados informados
5. ✅ Retorna **201** com os dados do usuário cadastrado

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **400** se number ou address não forem fornecidos pelo client
3. ✅ Retorna erro **403** se existir uma agência com o number fornecido
4. ✅ Retorna erro **500** se der erro ao ocorrer algo com banco de dados