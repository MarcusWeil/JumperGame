const marioCharacter = document.querySelector('.mario');
const gameOver = document.querySelector('.game-over');
const pipeProp = document.querySelector('.pipe');
let Gamescore = 0;
let highscore;

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
    
    const score = document.querySelector(".score h4").innerHTML = Gamescore.toFixed(0);
    Gamescore += 1/5;

        


        if(pipePosition > 0 && pipePosition <= 100 && marioPosition < 100){
            pipeProp.style.animation = 'none'
            pipeProp.style.left = `${pipePosition}px`;
            marioCharacter.style.animation = 'none'
            marioCharacter.style.bottom = `${marioPosition}px`;
            gameOver.style.bottom = `${marioPosition - 30}px`;

            marioCharacter.classList.add('hidden')
            gameOver.classList.remove('hidden')

            clearInterval(loop);

        }
    },10)

document.addEventListener('keydown', jump);