import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Mariana', 'M@email.com', '2020-01-01')
const  novoAdmin = new Admin('Leonardo', 'leo@email.com', '1986-05-05')



// console.log(novoUser.exibirInfos())
// console.log(novoAdmin.nome)
// // console.log(novoUser.nome)

// novoAdmin.nome = ''
// novoAdmin.ativo = true
// console.log(novoAdmin.nome)

// console.log(novoAdmin.exibirInfos())

const novoUser2 = new User('Leonardo', 'Oliveira', 'leo@email.com', '2015-05-05')


console.log(novoUser2.nome)
novoUser2.nome = 'Lucca de lima Luz'
console.log(novoUser2.nome)





// console.log(novoUser2.exibirInfos())
