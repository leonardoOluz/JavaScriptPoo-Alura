import chalk from "chalk";
import User from "./User.js";

// Admin é uma subClasse de User => Admin é child e User é Parents  

export default class Admin extends User {
    constructor(nome,sobrenome, email, nascimento, role ='admin', ativo = true){
        super(nome,sobrenome,email, nascimento,role,ativo)
    }

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }

    // Forma de reaproveitar o metodo em outra classe do tipo subclasse é a forma de polimorfismo
    exibirInfos(){
        return `Administrador:  ${this.nome}. Email:  ${this.email}. Setor/função:  ${this.role}`
    }

}
