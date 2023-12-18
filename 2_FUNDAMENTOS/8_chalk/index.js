const chalk = require('chalk');

const nota = 5;

nota >= 7 ? console.log(chalk.green.bold("Parabéns, você está aprovado!")) : console.log(chalk.bgRed.bold('Você precisa fazer a prova de recuperação!'));