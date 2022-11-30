import chalk from "chalk"

function User(nome, email) {
    this.nome = nome
    this.email =email
    this.exibirInfos = function (){
        return `${this.nome}, ${this.email}`
    }
}

// const novoUser = new User('Leonardo', 'l@l.com') // usando o New função construtora
// console.log(chalk.green(novoUser.exibirInfos()))

// function Admin(role){
//     User.call(this, 'juliana', 'j@j.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(chalk.blue(novoUser.exibirInfos()))
// console.log(chalk.yellow(novoUser.role))

const user = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },

    exibirInfos: function(){
        return this.nome
    }
}

const novoUser = Object.create(user)// criando um objeto apartir do Object.create
novoUser.init('Leonardo Luz','leo@email.com')
console.log(novoUser.exibirInfos())



// console.log(chalk.green(novoUser.exibirInfos('Leonardo')))
// console.log(user.isPrototypeOf(novoUser))// verificando se o objeto novoUser é prototype de user 

