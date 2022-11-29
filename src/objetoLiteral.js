import chalk from "chalk"


// Objeto Literal
const user = {
    nome: 'Leonardo',
    email: 'l@email.com',
    nascimento: '1986/03/11',
    role: 'admin',
    ativo: true,
    exibirInfos: function(){
        console.log(chalk.yellow(`Meu nome é ${this.nome}, e meu email ${this.email} nascido em ${this.nascimento}`))
    },
}

// user.nome = 'Lucca'
// user.exibirInfos()
// user.tamanho = '1,76'
// console.log(chalk.green(`meu nome é ${user.nome} e meu tamanho ${user.tamanho}`))
// Herança de protótipo


// tratando a palavra this que refere a isso dentro do contexto do objeto, fora do seu objeto fica sem referência 
const exibir = function(){
    console.log(chalk.yellow(`${this.nome} ${this.email}`))
}

const exibirNome = exibir.bind(user) // usando o bind para ligar ou prender a nova const ao objeto, mais lembrando que ao declarar a variavel ela é uma nova variavel 

exibir.call(user)// usando o call para passar a função o obj de referencia


// exibirNome()
// exibir()

// console.log(typeof exibirNome)// função 
