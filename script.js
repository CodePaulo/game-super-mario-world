const mario = document.querySelector('.mario')
const piper = document.querySelector('.piper')
const comecar = document.querySelector('.comecar')
const manual = document.querySelector('.manual')

let pontuacao = 0
let record = 0

comecar.addEventListener('click', e => {
    iniciar()
})

document.addEventListener('keydown', e => {
    iniciar()
    pular(e)
})

const loop = setInterval(() => {
    let piperPosition = piper.offsetLeft
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')

    if(piperPosition <= 175 && piperPosition > -50 && marioPosition <= 120){
        piper.classList.remove('initi-game')
        piper.style.left = `${piperPosition}px`

        mario.classList.remove('jump')
        mario.style.bottom = `${marioPosition}px`
        mario.src = 'mario-mario-dead.gif'

        pontuacao = 0

        document.addEventListener('keydown', e => {
            iniciar()
            pular(e)
        })
    }else{
        pontuacao++
        document.querySelector('.pontuacao span:nth-of-type(2)').innerHTML = pontuacao   
    }

    if(pontuacao >= record){
        record = pontuacao
        document.querySelector('.pontuacao span:nth-of-type(4)').innerHTML = record
    }

    if(pontuacao % 100 === 0 && pontuacao > 0){
        document.querySelector('.corpo').style.backgroundImage = 'linear-gradient(black, grey, white)'
    }

    if(pontuacao % 200 === 0){
        document.querySelector('.corpo').style.backgroundImage = 'linear-gradient(blue, #3db0f7, #87ceeb, white)'
    }

    if(pontuacao % 500 === 0 && pontuacao > 0){
        document.querySelector('.corpo').style.backgroundImage = 'linear-gradient(brown, red, white)'
    }
}, 150);

function iniciar(){
    manual.style.display = 'none'
    document.querySelector('.pontuacao').style.display = 'block'

    piper.classList.add('initi-game')
    piper.style.left = ''

    mario.style.bottom = `-5px`
    mario.src = '39635620bc39fd89280af66645b69d80.gif'

    duration = 2000
}

function pular(e){
    if(e.key === 'ArrowUp'){
        mario.src = 'SodaPDF-converted-39635620bc39fd89280af66645b69d80.png'
        mario.classList.add('jump')

        setTimeout(()=>{
            mario.src = '39635620bc39fd89280af66645b69d80.gif'
            mario.classList.remove('jump')
        },600)
    }
}