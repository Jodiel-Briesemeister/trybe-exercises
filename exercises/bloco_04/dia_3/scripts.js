let quadrado = '';

for (let numero = 0; numero <= 5; numero += 1){
    quadrado += '*';
     if (numero === 5){
         for (numero = 0; numero <= 4; numero += 1){
             console.log(quadrado);
         }
     }
}

let triangulo = '';

for (let numero = 0; numero <= 5; numero += 1){
    triangulo += '*';
    console.log(triangulo);
}


let triangulo1 = '';
let triangulo2 = '';
let pos = 5;

for (let linha = 0; linha < 5; linha += 1){
    for (let coluna = 0; coluna <= 5; coluna += 1){
        if (coluna < pos) {
            triangulo2 = triangulo2 + ' ';
        }
        else {
            triangulo2 += '*';
        }
    }
    triangulo1 += '*';
    pos -= 1;
    console.log(triangulo2, triangulo1);
    triangulo2 = '';
    
}

// console.log('     *');
// console.log('    **');
// console.log('   ***');
// console.log('  ****');
// console.log(' *****');