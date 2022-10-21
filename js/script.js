const marioCharacter = document.querySelector('.mario');
const gameOver = document.querySelector('.game-over');
const pipeProp = document.querySelector('.pipe');

const jump = () => {
    marioCharacter.classList.add('jump');
    
    setTimeout(() => {       
        marioCharacter.classList.remove('jump');
    },800)
}

const loop = setInterval(() => {
        const pipePosition = pipeProp.offsetLeft;
        // Foi necessário usar windowGetComputedStyle porque a propriedade
        // offsetBottom não exis te, e assim é possível pegar qualquer elemento
        const marioPosition = window.getComputedStyle(marioCharacter).bottom.replace('px','');

        if(pipePosition > 0 && pipePosition <= 110 && marioPosition < 110.0){
            pipeProp.style.animation = 'none'
            pipeProp.style.left = `${pipePosition}px`;
            marioCharacter.style.animation = 'none'
            marioCharacter.style.bottom = `${marioPosition}px`;
            gameOver.style.bottom = `${marioPosition - 20}px`;

            marioCharacter.classList.add('hidden')
            gameOver.classList.remove('hidden')

            clearInterval(loop);

        }
    },10)

document.addEventListener('keydown', jump);