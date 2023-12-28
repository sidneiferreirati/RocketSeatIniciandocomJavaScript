// 1 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
console.log("Hello Word!");

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let a = 2
let b = 3
const sum = a + b
console.log(sum);


// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. 
// Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let c = 55
console.log(typeof c === "number"  ?"é um numero":'não é um numero');

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. 
// Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let isString = (char) => typeof char === "string" ?"É uma string":"Não é uma string"
console.log(isString("BLABLABla"));
console.log(isString(23));


// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano.
//  Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let isBoolean = (isTrue) => typeof isTrue === 'boolean' ? "É um booleano" :"Não é um booleano" 
console.log(isBoolean(false));
console.log(isBoolean(2));
console.log(isBoolean('char'));

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const subtração =(n1,n2)=> console.log(n1- n2);
subtração(15,3)
subtração(27,19)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const multiplicação =(n1,n2)=> console.log(n1* n2);
multiplicação(7,95)
multiplicação(7,4)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const divisão =(n1,n2)=> console.log(n1 / n2);
divisão(5,2)
divisão(75,4)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. 
// Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const isPair = (n)=> n % 2 === 0? "É um número par" :"Não é um número par"
console.log(isPair(2));
console.log(isPair(3));


// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
// Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const isOdd = (n)=> n % 2 === 1? "É um número ímpar" :"Não é um número ímpar"
console.log(isOdd(1556));
console.log(isOdd(3));