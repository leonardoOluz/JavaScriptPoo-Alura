import Cliente from "./Cliente.js";
export default class Agencia extends Cliente {
    #gerente
    #agencia
    #conta
    #tipoDeConta
    constructor(nome, email, endereco, telefone, saldo, gerente, agencia, conta , tipoDeConta){
        super(nome, email,endereco,telefone,saldo)
        this.#gerente = gerente
        this.#agencia = agencia
        this.#conta = conta
        this.#tipoDeConta = tipoDeConta        
    }
    get gerente(){
        return this.#gerente
    }
    get agencia(){
        return this.#agencia
    }
    get conta(){
        return this.#conta
    }
    get tipoDeConta(){
        return this.#tipoDeConta
    }
    set gerente(nomeGerente){
        this.#gerente = nomeGerente
    }
    set agencia(numeroAgencia){
        this.#agencia = numeroAgencia
    }
    set conta(numeroConta){
        this.#conta = numeroConta
    }
    set tipoDeConta(tipoConta){
        this.#tipoDeConta = tipoConta
    }
    exibirInfos(){
        if(this.ativacao){
            return `Cliente: ${this.nome}.
            Endereço: ${this.endereco}. 
            Id: ${this.id}. 
            Telefone: ${this.telefone}.
            Situação da conta: ${this.ativacao}.
            Saldo da conta R$ ${this.saldo}.
            Tipo de conta: ${this.tipoDeConta}.
            Agencia: ${this.agencia}.
            Numero da Conta: ${this.conta}.
            Gerente: ${this.gerente}  `
        }else {
            return `Prezado(a) ${this.nome} peço para que procura a agencia ${this.agencia} e fale direto com seu gerente ${this.gerente} para verificar a conta inativa `
        }  
    }

}