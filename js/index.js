// Source card

var button = document.getElementById('button-3'); // Assumes element with id='button'

button.onclick = function () {
    var div = document.getElementById('card');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};