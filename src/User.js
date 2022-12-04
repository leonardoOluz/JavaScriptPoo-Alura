import chalk from "chalk"

// Criando uma classe com nome User
export default class User {
    // atributos privados
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    //             Metodo Construtor
    constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    //                ***  Metodos Especiais  ***

    // O metodos getters serve para apenas leituras função get nunca recebe argumento só returna variaveis que estão privadas

    get nome() {
        // Podemos colocar logica dentro do get
        if (this.#ativo) {
            return `${this.#nome} ${this.#sobrenome}`
        } else {
            return `${this.#role} está desativado`
        }
    }
    get email() {
        // Podemos colocar logica dentro do get
        return this.#email
    }
    get nascimento() {
        // Podemos colocar logica dentro do get
        return this.#nascimento
    }
    get role() {
        // Podemos colocar logica dentro do get
        return this.#role
    }
    get ativo() {
        // Podemos colocar logica dentro do get
        if (this.#ativo) {
            return `${this.#role} está ativo`
        } else {
            return `Usuario desativado`
        }
    }

    // Metodos setters serve para modificar um atributo privado
    set nome(novoNome) {
        // Podemos colocar logica dentro do set
        if (novoNome === '') {
            throw new Error(chalk.red('formato não valido'))
        }
        let [nome, ...sobrenome] = novoNome.split(" ")
        sobrenome = sobrenome.join(' ')
        this.#nome = nome
        this.#sobrenome = sobrenome
    }
    set email(novoEmail) {
        // Podemos colocar logica dentro do set
        this.#email = novoEmail
    }
    set nascimento(novoNascimento) {
        // Podemos colocar logica dentro do set
        this.#nascimento = novoNascimento
    }
    set role(novoRole) {
        // Podemos colocar logica dentro do set
        this.#role = novoRole
    }
    set ativo(novoAtivo) {
        // Podemos colocar logica dentro do set
        this.#ativo = novoAtivo
    }

    // Não usamos a palavra function ao declarar um metodo na classes e só passamos o nome e criamos o metodo

    #exibirInfos() { // metodo 
        return `Nome do aluno: ${this.nome}.
                Sobrenome: ${this.sobrenome} 
                Email: ${this.email}. 
                Data de nascimento: ${this.nascimento}. 
                Função: ${this.role}.
                Ativo: ${this.ativo}.`
    }
}
