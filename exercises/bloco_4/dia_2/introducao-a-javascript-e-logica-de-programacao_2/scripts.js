let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers)

let total = 0;
let maior = 0;
let impar = 0;
let menor = 0;

for (let count = 0; count < numbers.length; count++){
    total = total + numbers[count]
    if (maior < numbers[count]){
        maior = numbers[count]
    }
    if (count == 0){
        menor = numbers[count]
    }
    if (menor > numbers[count]){
        menor = numbers[count] 
    }
    if (numbers[count] % 2 ^ 0) {
        impar++
    }
    if (count == numbers.length - 1){
        console.log('Soma total: ' + total);
        console.log('Média aritmética: ' + total / numbers.length);
        console.log('Maior valor: ' + maior);
        console.log('Menor valor: ' + menor);
        if (impar > 0){
            console.log('Valores ímpares encontrados: ' + impar)
        }
        else {
            console.log('Nenhum valor ímpar encontrado.')
        }
        if ((total / numbers.length) > 20){
            console.log('Valor maior que 20');
        }
        else{
            console.log('Valor menor ou igual a 20');
        }
    }
}

let numeros = [];

for (let count = 0; count < 25; count++){
    numeros.push(count);
    if (numeros.length > 0){
        console.log (numeros.length / 2)
    }
    //
    if (count == 24){
        console.log('array numeros tamanho: ' + numeros.length);
    }
}

