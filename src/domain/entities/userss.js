export class User {
  id
  name
  email
  password
  cpf
  address

  constructor({ id, name, email, password, cpf, address }) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this. cpf = cpf
    this.address = address
  }
}