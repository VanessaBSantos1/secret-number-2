let limit = 10;
let secret_number = getSecrect_Number();
let guess_count = 0;
let max_attempts = 5;

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verificarChute();
    }
});

function getSecrect_Number() {
    return Math.floor((Math.random()*limit)+1);
}

function exibeTextoTag(tag, texto) {
    responsiveVoice.speak(texto, "UK English Female", {pitch: 1});
    let varTag = document.querySelector(tag);
    varTag.innerHTML = texto;
}

function inicializaTexto() {
    exibeTextoTag('h1', 'Secret Number');
    exibeTextoTag('p', `Type a number between 1 and ${limit}`);
}

function limpraInput() {
    document.querySelector('input').value = '';
}

function verificarChute() {
    let guess = parseInt(document.querySelector('input').value); //garante que seja um numero

    if(isNaN(guess) || guess < 0 || guess > limit) {
        exibeTextoTag('p', `Plase type a valid number between 0 and ${limit}`);
        return;
    } 

    guess_count++;

    exibeTextoTag('h1', `Attempt ${guess_count}/${max_attempts}` );
    
    if (secret_number == guess) { //condição se acertar
        let word_attempts = guess_count > 1 ? 'attempts' : 'attempt'; //substituto para if else
        exibeTextoTag('h1', `Well done, you win in ${guess_count} ${word_attempts} S2!`);
        exibeTextoTag('p', 'Congratulations!!');
        document.getElementById('reiniciar').removeAttribute('disabled');
        desabilitaChute();
        desabilitaInput();
    } else { //condição se errar - dicas de chute
        if(secret_number < guess){
            exibeTextoTag('p', `Tray again :( The secret number is less than your guees ${guess} ;)`);
        } else {
            exibeTextoTag('p', ` Tray again :( The secret number is greater than your guees ${guess};)`);
        }
    }

    if(guess_count >= max_attempts) {
        exibeTextoTag('h1', `Game Over! You've used all ${max_attempts} attempts.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('mais_tentativas').removeAttribute('disabled'); 
        desabilitaInput();
        desabilitaChute();
    }
    limpraInput();
}

function desabilitaInput() {
    document.querySelector('input').setAttribute('disabled', 'true');
}

function habilitaInput() {
    document.querySelector('input').removeAttribute('disabled');
}

function desabilitaChute() {
    document.querySelector('#chutar').setAttribute('disabled', 'true');
}

function habilitaChute() {
    document.querySelector('#chutar').removeAttribute('disabled');
}

function maisTentativas() {
    max_attempts += 3;
    exibeTextoTag('p', `You have received 3 extra attempts. You now have ${max_attempts - guess_count} attempts left.`);
    habilitaChute();
    habilitaInput();
    document.getElementById('mais_tentativas').setAttribute('disabled', 'true');
}

function novoJogo() {
    inicializaTexto();
    secret_number = getSecrect_Number();
    limpraInput();
    guess_count = 0; //zera o contador
    max_attempts = 5;
    habilitaInput();
    habilitaChute();
    document.getElementById('reiniciar').setAttribute('disabled', 'true') //desabilita o novo jogo ate o procimo acerto
    document.getElementById('mais_tentativas').setAttribute('disabled', 'true');
}

inicializaTexto();
habilitaInput();
habilitaChute();