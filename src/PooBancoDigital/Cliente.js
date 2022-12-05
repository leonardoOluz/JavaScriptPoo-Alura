export default class Cliente {
    // atributos
    #id
    #nome
    #email
    #endereco
    #telefone
    #saldo
    #ativacao
    // Método construtor
    constructor(nome, email, endereco, telefone, saldo, ativacao = true, id = Math.floor(Math.random() * 1000)) {
        this.#id = id
        this.#nome = nome
        this.#email = email
        this.#endereco = endereco
        this.#telefone = telefone
        this.#saldo = saldo || 0
        this.#ativacao = ativacao
    }
    // Métodos getters
    get id() {
        return this.#id
    }
    get nome() {
        return this.#nome
    }
    get email() {
        return this.#email
    }
    get endereco() {
        return this.#endereco
    }
    get telefone() {
        return this.#telefone
    }
    get saldo() {
        return this.#saldo
    }
    get ativacao() {
        return this.#ativacao
    }
    // Métodos setters
    set id(idClient) {
        this.#id = idClient
    }
    set nome(nomeClient) {
        this.#nome = nomeClient
    }
    set email(emailClient) {
        this.#email = emailClient
    }
    set endereco(enderecoClient) {
        this.#endereco = enderecoClient
    }
    set telefone(telefoneClient) {
        this.#telefone = telefoneClient
    }
    set saldo(saldoClient) {
        this.#saldo = saldoClient
    }
    set ativacao(ativaClient) {
        this.#ativacao = ativaClient
    }
    // Métodos comportamentais
    depositar(valor) {
        if (this.ativacao) {
            this.saldo += valor
            return `Você fez um deposito de ${valor} e seu saldo é de R$ ${this.saldo}`
        }else{
            return `Sua conta esta desativado procure o gerente ou ligue no 0800 778899`
        }
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor
            this.verificacao()
            return `Você fez um saque de R$ ${valor} e seu saldo é de R$ ${this.saldo}`
        } else if (this.saldo < valor) {
            this.verificacao()
            return `Saldo insuficiente para saque, Saldo R$ ${this.saldo}`
        }
    }
    exibirInfos(){
        if(this.ativacao){
            return `Cliente: ${this.nome}.
         Endereço: ${this.endereco}. 
         Id: ${this.id}. 
         Telefone: ${this.telefone}.
         Situação da conta: ${this.ativacao}.
         Saldo da conta R$ ${this.saldo} `
        }else{
            return `Conta inativa procure seu gerente`
        }
    }
    verificacao(){
        if(this.saldo === 0){
            this.ativacao = false
        }
    }
}