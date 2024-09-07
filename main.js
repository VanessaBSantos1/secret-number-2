varH1 = document.querySelector('h1');
varH1.innerHTML = 'Secret Number';

let limit = 10;
varP= document.querySelector('p');
varP.innerHTML = `Type a number between 1 and ${limit}`;


let secret_number = Math.floor((Math.random()*limit)+1);
let guess_count = 0;

function verificarChute() {
    let guess = parseInt(document.querySelector('input').value); //garante que seja um numero
    guess_count++;

    if(isNaN(guess) || guess < 0 || guess > limit) {
        varP.innerHTML = (`Plase type a valid number between 0 and ${limit}`);
    } else {
        if (secret_number == guess) { //condição se acertar
            let word_attempts = guess_count > 1 ? 'attempts' : 'attempt'; //substituto para if else
            varH1.innerHTML = (`Well done, you win in ${guess_count} ${word_attempts} S2!`);
            varP.innerHTML = ('Congratulations!!');
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else { //condição se errar - dicas de chute
            if(secret_number < guess){
                varP.innerHTML = (`Tray again :( The secret number is less than your guees ${guess} ;)`);
            } else {
                varP.innerHTML = (` Tray again :( The secret number is greater than your guees ${guess};)`);
            }
        }
    }
}

function novoJogo() {
    varH1.innerHTML = 'Secret Number'; //reinicia a tag h1
    varP.innerHTML = `Type a number between 1 and ${limit}`; //reinicia a tag p

    guess_count = 0; //zera o contador

    secret_number = Math.floor((Math.random()*limit) + 1); //gera um novo numero secreto

    document.querySelector('input').value = ''; //limpa o input

    document.getElementById('reiniciar').setAttribute('disabled', 'true') //desabilita o novo jogo ate o procimo acerto

}