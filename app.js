var valid       = document.querySelector('.valid');
// var alpha       = 'ABCDEFGHIJKLMNOPQURSTUVWXYZ';

document.body.onkeyup = function(e){
    if(e.keyCode == 13){
        var message = document.querySelector('.message');
        console.log(message.value);
        valid.style.display = 'block';

        // Cryptage

        for (var i = 0; i < message.value.length; i++) {
            console.log('le message de base est : ' + message.value);
            console.log('transformation numérique');
            var tata = message.value.charCodeAt(i);
            console.log(tata);
            console.log('Ajout du code');
            var toto = message.value.charCodeAt(i) + 3;
            console.log(toto);
            console.log('Encodage... ');
            var titi = String.fromCharCode(toto);
            console.log(titi);
        }

    }
};
