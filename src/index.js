import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Mariana', 'M@email.com', '2020-01-01')

console.log(novoUser.exibirInfos())
