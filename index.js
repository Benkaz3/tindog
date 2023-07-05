import dogs from './data.js'
import Dog from './Dog.js'
import { disableButtons, enableButtons } from './utils.js'

function getNewDog(){
    const newDogData = dogs.shift()
    return newDogData ? new Dog(newDogData) : {}
}

let dog = getNewDog()

function render(){
    document.getElementById('card').innerHTML = dog.getDogHtml()
}

render()

document.querySelector('.icon-heart-wrapper').addEventListener('click', like)
document.querySelector('.icon-cross-wrapper').addEventListener('click', reject)

function like(){
    document.getElementById('accept-state').setAttribute('style', 'display: block')
    disableButtons()
    setTimeout(()=>{
        if(dogs.length > 0){
            dog = getNewDog()
            document.getElementById('accept-state').setAttribute('style', 'display: none')
            render()
            dog.hasBeenSwiped = true
            enableButtons()
        }
        else {
            endGame()
       }
    },1500)
}

function reject(){
    document.getElementById('reject-state').setAttribute('style', 'display: block')
    disableButtons()
    setTimeout(()=>{
        if (dogs.length > 0){
            dog = getNewDog()
            document.getElementById('reject-state').setAttribute('style', 'display: none')
            render()
            dog.hasBeenSwiped = true
            enableButtons()
        }
        else {
            endGame()
        }
    },1500)
}

function endGame() {
    document.body.innerHTML = `
        <div class='end-info'>
            <h1 class='end-message'>We've ran out of cuteness!</h1>
            <p class='end-emoji'>🤭</p>
        </div>
        `
}