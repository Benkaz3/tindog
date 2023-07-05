class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    getDogHtml(){
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return `
        <img class='dog-avatar' src=${avatar}>
        <div class='dog-text-wrapper'>
            <h3 class='dog-name'>${name},<span class='dog-age'> ${age}</span></h3>
            <p class='dog-bio'>${bio}</p>
        </div>
        `
    }
}

export default Dog