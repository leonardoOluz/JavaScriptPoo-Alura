import User from "./User.js";

// Admin é uma subClasse de User => Admin é child e User é Parents 

class Admin extends User {
    constructor(nome, email, nascimento, role ='admin', ativo = true){
        super(nome, email, nascimento,role,ativo)
    }
}

const novoAdmin = new Admin('Lucca', 'lucca@email.com','2021-01-01')

console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())// usando a herança de classe 
