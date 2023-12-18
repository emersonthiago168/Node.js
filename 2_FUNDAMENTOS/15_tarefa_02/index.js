const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer
    .prompt([
        {
            name: 'nome',
            message: 'Qual é o seu nome?'
        },
        {
            name: 'idade',
            message: 'Qual é a sua idade?'
        }
    ])
    .then(r => {
        if (!r.nome || !r.idade) throw new Error('O nome são obrigatórios!')
        console.log(chalk.bgYellow.black.bold(`Seu nome é ${r.nome} e você tem ${r.idade} anos`));
    })
    .catch(err => console.log(err));

