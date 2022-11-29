import chalk from "chalk"


// Objeto Literal
const user = {
    nome: 'Leonardo',
    email: 'l@email.com',
    nascimento: '1986/03/11',
    role: 'admin',
    ativo: true,
    exibirInfos: function(){
        console.log(chalk.yellow(`Meu nome é ${this.nome}, e meu email  ${this.email}`))
    },
}

user.nome = 'Lucca'
user.exibirInfos()
user.tamanho = '1,76'
console.log(chalk.green(`meu nome é ${user.nome} e meu tamanho ${user.tamanho}`))

// Herança de protótipo
