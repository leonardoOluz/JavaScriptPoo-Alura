import chalk from "chalk"
// Objeto Literal
const user = {
    nome: 'Leonardo',
    email: 'l@email.com',
    nascimento: '1986/03/11',
    role: 'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(chalk.yellow(`Meu nome é ${this.nome}, e meu email ${this.email} nascido em ${this.nascimento}`))
    },
}
const admin = {
    nome: 'Mariana',
    email: 'm@m.com',
    role: 'admin',
    criarCurso(){
        console.log(chalk.blue('curso criado!'))
    }
}
Object.setPrototypeOf(admin, user) // colocamos que o user é prototipo de admin por este motivo apôs procurar no objeto admin e não encontrar o método exibirInfos o prototipo busca no user.
admin.criarCurso()
admin.exibirInfos()
