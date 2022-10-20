const marioCharacter = document.querySelector('.mario');
const pipeProp = document.querySelector('.pipe');

const jump = () => {
    loop();
    marioCharacter.classList.add('jump');
    
    setTimeout(() => {       
        marioCharacter.classList.remove('jump');
    },800)
}

const loop = () => {
    setInterval(() => {
        const pipePosition = pipeProp.offsetLeft;
        console.log(pipePosition)
    },10)
}
document.addEventListener('keydown', jump);