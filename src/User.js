// Criando uma classe com nome User
class User {
    constructor(nome, email, nascimento, role, ativo = true){
        this.nome =  nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User('Leonardo', 'leo@email.com', '1986/06/31')// instanciando um novo objeto apartir de uma classe User

console.log(novoUser)// chamando no console.log o novo obj
console.log(novoUser.exibirInfos())// chamado no console a função exibirInfos

console.log(User.prototype.isPrototypeOf(novoUser)) // true



