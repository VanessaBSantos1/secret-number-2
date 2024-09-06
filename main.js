varH1 = document.querySelector('h1');
varH1.innerHTML = 'Secret Number';

varP= document.querySelector('p');
varP.innerHTML = 'Type a number between 1 and 10';

let secret_number = 5; //Math.floor((Math.random()*10)+1);
function verificarChute() {
    let guess = document.querySelector('input').value;

    if (secret_number == guess) { //condição se acertar
        varH1.innerHTML = (`Well done, you win S2!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { //condição se errar - dicas de chute
        if(secret_number < guess){
            varP.innerHTML = (`Tray again :( The secret number is less than your guees ${guess}`);
        } else {
            varP.innerHTML = (` Tray again :( The secret number is greater than your guees ${guess}`);
        }
    }
}