const buttons = document.querySelectorAll('button');

const playnote = event =>{
const button = event.target;
const note =  button.dataset.note;
console.log('audio' + note);

}

buttons.forEach(
    button => button.addEventListener('click', func )
);