var valid       = document.querySelector('.valid');
var error       = document.querySelector('.error');
// var alpha       = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ';

document.body.onkeyup = function(e){
    if(e.keyCode == 13){
        var message = document.querySelector('.message').value;
        var cle     = parseInt(document.querySelector('.cle').value);
        while (cle <= 0 || cle >= 9) {
            error.style.display = 'block';
            clearData(cle);
        }

        error.style.display = 'none';

        console.log(cle);
        console.log(message);
        valid.style.display = 'block';
        valid.innerText = '';

        // Cryptage

        for (var i = 0; i < message.length; i++) {
            console.log('le message de base est : ' + message);
            console.log('transformation numérique');
            var tata = message.charCodeAt(i);
            console.log(tata);
            console.log('Ajout du code');
            var toto = message.charCodeAt(i) + cle;
            console.log(toto);
            console.log('Encodage... ');
            var titi = String.fromCharCode(toto);
            console.log(titi);
            valid.innerText += titi;

            var audio = new Audio('tada.mp3');
            audio.play();
        }

    }
};
