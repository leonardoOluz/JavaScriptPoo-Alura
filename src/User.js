// Criando uma classe com nome User
export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo 
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }
    // Não usamos a palavra function ao declarar um metodo na classes e só passamos o nome e criamos o metodo
    exibirInfos() {
        return `Nome do aluno: ${this.#nome}. 
        Email: ${this.#email}. 
        Data de nascimento: ${this.#nascimento}. 
        Função:${this.#role}.
        Ativo:${this.#ativo}.`
    }
}
