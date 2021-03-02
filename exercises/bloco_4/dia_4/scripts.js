// let info = {
//     personagem: "Margarida",
//     origem: "Pato Donald",
//     nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
//     recorrente: 'Sim',
//     info2: {
//         personagem: "Tio Patinhas",
//         origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//         nota: "O último MacPatinhas",
//         recorrente: 'Sim'
//     }
// };

// console.log('Bem-vinda, ' + info.personagem)

// for(i in info){
//     console.log(i)    
// }

// for(i in info){
//     console.log(info[i])
// }


// for(i in info){
//     console.log(info[i], info.info2[i])
// }

function verificaPalindrome(nome){
    let letras = nome.split("");
    for (let index in letras){
        if(letras[index] === nome[(nome.length - 1) - index]){
            palindrome = true;
        }
        else {
            palindrome = false;
            break;
        }
    }
    return palindrome;
}


console.log("A palavra 'arara' é palindromo: " + verificaPalindrome("arara"))
console.log("A palavra 'desenvolvimento' é palindromo: " + verificaPalindrome("desenvolvimento"))

// function maiorIndice(number){
//     let maior = number[0];
//     let indice = 0;
//     for (let index in number){
//         if (maior < number[index]){
//             maior = number[index];
//             indice = index;
//         }
//     }
//     return indice;
// }

// arrayNumeros = [2, 3, 6, 7, 10, 1];
// console.log("Indice do maior valor: " + maiorIndice(arrayNumeros));



// function menorIndice(number){
//     let menor = number[0];
//     let indice = 0;
//     for (let index in number){
//         if (menor > number[index]){
//             menor = number[index];
//             indice = index;
//         }
//     }
//     return indice;
// }

// arrayNumeros = [2, 4, 6, 7, 10, 0, -3];
// console.log("Indice do menor valor: " + menorIndice(arrayNumeros));

function maiorNome(nome){
    let maiorNome = nome[0];
    let indice = 0;
    for (let index in nome){
        if(maiorNome.length < nome[index].length){
            maiorNome = nome[index]
            indice = index;
        }
    }
    return indice;
}

arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log("Indice do maior nome: " + maiorNome(arrayNomes));



function numeroRepetido(number){
    let maisRepetido = 0;
    let contador = 1;
    let salvaContagem = 0;
    let posicao = number.length
    for (let index in number) {
        for (let index in number){
            if (number[posicao] == number[index]){
                contador += 1;
                if (contador > salvaContagem){
                    maisRepetido = number[index];
                    salvaContagem = contador
                }
            }
        }
        posicao -= 1;
        contador = 0;
    }
    return maisRepetido;
}


arrayRepete = [2, 3, 2, 5, 8, 2, 3]

console.log("Número que mais se repete: " + numeroRepetido(arrayRepete))




let N = 5;

function soma(N){
    let total = 0;
    for(let index = 0; index <= N; index += 1){
        total += index;
    }
    return total;
}

console.log(soma(N));


function verificaFimPalavra(word, ending){
    let palavra1 = word.split("");
    let palavra2 = ending.split("");
    let final = true
        for(let index = 0; index < palavra2.length; index += 1){
            if(palavra1[word.length - ending.length + index] != ending[index] && palavra2.length < palavra1.length)
            {
                final = false
            }
        }
        return final;
}

console.log(verificaFimPalavra("trybe", "be"))
console.log(verificaFimPalavra("joaofernando", "fernan"))