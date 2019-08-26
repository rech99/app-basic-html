const buttons = document.querySelectorAll('button');

const playnote = event =>{
    console.log(event.target.datset.note);
}

buttons.forEach(
    button => button.addEventListener('click', func )
);