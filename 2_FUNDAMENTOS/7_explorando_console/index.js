const x = 10;
const y = 'João';
const z = [1, 2];

// Mais de um valor
console.log(x, y, z);

// Contagem de impressões
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);

// Variável entre String
console.log("O nome é %s, e ele é programador", y);

// Limpar o console
setTimeout(() => {
    console.clear()
}, 2000)