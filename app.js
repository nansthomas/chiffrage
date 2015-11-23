var valid = document.querySelector('.valid');

document.body.onkeyup = function(e){
    if(e.keyCode == 13){
        var message = document.querySelector('.message');
        console.log(message.value);
        valid.style.display = 'block';
    }
};
