import chalk from "chalk";
import User from "./User.js";

// Admin é uma subClasse de User => Admin é child e User é Parents 

class Admin extends User {
    constructor(nome, email, nascimento, role ='admin', ativo = true){
        super(nome, email, nascimento,role,ativo)
    }
    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }

}

const novoAdmin = new Admin('Lucca', 'lucca@email.com','2021-01-01')// instanciando do new Admin

console.log(chalk.bgBlue(novoAdmin.criarCurso('JavaScript POO', '20')))
