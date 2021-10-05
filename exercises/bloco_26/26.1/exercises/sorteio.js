const readline = require('readline-sync');

function start_game() {
    const random_number = Math.floor(Math.random() * 11);
    const chooseNumber = readline.questionFloat('Escolha um número: ');
    let message = `Opa, não foi dessa vez. O número sorteado era ${random_number}`;
    if (chooseNumber === random_number) message = 'Parabéns, número correto!';
    console.log(message);
    const playAgain = readline.question(
        'Jogar novamente?: '
    );
    if (playAgain === 's' || playAgain === 'sim') {
        start_game();
    } else {
        console.log('Ok até mais!');
    };
}

start_game();