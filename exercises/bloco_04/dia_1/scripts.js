let a = 8;
let b = 3;
let c = 21;
let ex4;

console.log(a + b); //Adição
console.log(a - b); //Subtração
console.log(a * b); //Multiplicação
console.log(a / b); //Divisão
console.log(a % b); //Módulo

if (a > b) {
    console.log("Exercício 2= O maior número é: "+a);
}
else {
    console.log("Exercício 2= O maior número é: "+b);
}

////////////////////////

if (a > b && a > c) {
    console.log("Exercício 3= O maior número é: "+a);
}
else if (b > a && b > c) {
    console.log("Exercício 3= O maior número é: "+b);
}
else {
    console.log("Exercício 3= O maior número é: "+c);
}

////////////////

if (a > b){
    ex4 = true;
}
else {
    ex4 = false;
}
console.log(ex4);

//////////////

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;
let triangulo;

if (angulo1 + angulo2 + angulo3 == 180) {
    triangulo = true
    console.log("É um triângulo.");
}
else {
    triangulo = false
    console.log("Não é um triângulo.");
}
console.log(triangulo);

////////////////////////////

let peca = "bIsHop";

switch (peca.toLowerCase()) {
    case "king":
        console.log("1 passo para qualquer direção");
        break;
    case "queen":
        console.log("Quantos passos quiser para qualquer direção");    
        break;
    case "rook":
        console.log("Quantos passos quiser para qualquer lado exceto diagonal");    
        break;
    case "bishop":
        console.log("Quantos passos quiser - apenas diagonal")    
        break;
    case "knight":
        console.log("Movimento em forma de L(Dois passos na vertical e 1 na horizontal)")
        break;
    case "pawn":
        console.log("Pode dar dois passos em seu primeiro movimento e apenas 1 posteriormente")
        break;
    default:
        console.log("Peça não identificada");            
}

//////////////////////



////Exercício 7
let nota = 36;

if (nota >= 90 && nota < 100){
    console.log("A");
}
else if (nota >= 80 && nota < 100){
    console.log("B");
}
else if (nota >= 70 && nota < 100){
    console.log("C");
}
else if (nota >= 60 && nota < 100){
    console.log("D");
}
else if(nota >= 50 && nota < 100){
    console.log("E");
}
else if(nota < 50 && nota >= 0){
    console.log("F");
}
else {
    console.log("Valor inválido.")
}
///////////////


//////////Exercício 8
let valor1 = 3;
let valor2 = 6;
let valor3 = 9;

if (valor1 % 2 == 0 || valor2 % 2 == 0 || valor3 % 2 == 0){
    console.log("Par")
}
////////////////


////////Exercício 9
if (valor1 % 2 ^ 0 || valor2 % 2 ^ 0 || valor3 % 2 ^ 0){
    console.log("ímpar")
}
///////

////Exercício 10
let valorCusto = 15;
let valorVenda = 30;
let imposto = 20;
let valorCustoTotal = valorCusto + (valorCusto * (imposto / 100))
let lucro = valorVenda - valorCustoTotal

console.log("Lucro: "+lucro * 1000+" reais");
////

///Exercício 11
let bruto = 3000;
let inss;

if (bruto <= 1556.94){
    inss = bruto * 0.08;
}
else if (bruto >= 1556.95 && bruto <= 2594.92){
    inss = bruto * 0.09;
}
else if (bruto >= 2594.93 && bruto <= 5189.82){
    inss = bruto * 0.11;
}
else if (bruto > 5189.82){
    inss = bruto * 0.11;
    if (inss > 570.88){
        inss = 570.88
    }
}

let brutoInss = bruto - inss
let ir;
let salarioLiquido;

if (brutoInss <= 1903.98){
    ir = 0;
    salarioLiquido = brutoInss
}
else if(brutoInss >= 1903.99 && brutoInss <= 2826.65){
    ir = 0.075
    salarioLiquido = (brutoInss - (brutoInss * ir)) + 142.80
}
else if(brutoInss >= 2826.66 && brutoInss <= 3751.05){
    ir = 0.15
    salarioLiquido = (brutoInss - (brutoInss * ir)) + 354.80
}
else if(brutoInss >= 3751.06 && brutoInss <= 4664.68){
    ir = 0.225
    salarioLiquido = (brutoInss - (brutoInss * ir)) + 636.13
}
else if(brutoInss > 4664.68){
    ir = 0275
    salarioLiquido = (brutoInss - (brutoInss * ir)) + 869.36
}

console.log("Salário Líquido: "+salarioLiquido)
///////