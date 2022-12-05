import chalk from "chalk";
import Agencia from "./Agencia.js";

const clienteNovo = new Agencia('Leonardo Oliveira da Luz', 'leo@email.com','Rua Dos perdidos 124', '88 5539955443', 150, 'Tropeço adans', '1565','13955-2', 'CC')

console.log(chalk.red(clienteNovo.sacar(151)))

console.log(chalk.yellow(clienteNovo.exibirInfos()))
