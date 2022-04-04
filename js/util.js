'use strict'


function makeId(length = 4) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var txt = '';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function closeModal(name){
    var elModal = document.querySelector(`.${name}-modal`)
    elModal.style.display = 'none'
}
function openModal(name){
    var elModal = document.querySelector(`.${name}-modal`)
    elModal.style.display = 'block'
}