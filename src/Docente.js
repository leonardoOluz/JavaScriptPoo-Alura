import User from "./User.js";

export default class Docente extends User {
    constructor(nome,sobrenome, email, nascimento, role = 'Docente', ativo = true) {
        super(nome,sobrenome, email, nascimento, role, ativo)
    }
    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso ${curso}.`
    }
    exibirInfos(){
        return `Estudando ${this.nome} `
    }
}
