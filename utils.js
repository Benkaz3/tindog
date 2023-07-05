function disableButtons(){
    const likeButton = document.querySelector('.icon-heart-wrapper')
    const rejectButton = document.querySelector('.icon-cross-wrapper')
    likeButton.disabled = true
    rejectButton.disabled = true
}

function enableButtons(){
    const likeButton = document.querySelector('.icon-heart-wrapper')
    const rejectButton = document.querySelector('.icon-cross-wrapper')
    likeButton.disabled = false
    rejectButton.disabled = false
}

export {disableButtons, enableButtons}