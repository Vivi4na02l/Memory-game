let cards = ["florença.jpg","genebra.jpg","porto.jpg","barcelona.jpg"]
let cards2 = cards
let cycle = 0
let randomCard = 0
let randomArray = 0
let firstCard = true
let card = ''
let card2 = ''
let cardInner = ''
let card2Inner = ''
let cardClass = ''
let card2Class = ''

for (let i = 0; i < 4; i++) {
    cycle += 1

    if (cards.length != 0 && cards2.length != 0) {
        randomArray = Math.floor(Math.random() * 2)   
    } else if (cards.length == 0) {
        randomArray = 2
    } else {
        randomArray = 1
    }

    if (randomArray == 1) {
        randomCard = Math.floor(Math.random() * (cards.length))

        document.querySelector('#firstLine').innerHTML += `  
            <a id="c${cycle}">
                <img src="images/back.jpg" height="300px" id="${cards[randomCard]}">
            </a>
        `

        cards = cards.filter(pos => pos != cards[randomCard])
    } else {
        randomCard = Math.floor(Math.random() * (cards2.length))

        document.querySelector('#firstLine').innerHTML += `
            <a id="c${cycle}">
                <img src="images/back.jpg" height="300px" id="${cards2[randomCard]}">
            </a>
        `

        cards2 = cards2.filter(pos => pos != cards2[randomCard])
    }
}
 
for (let i = 0; i < 4; i++) {
    cycle += 1
    
    if (cards.length != 0 && cards2.length != 0) {
        randomArray = Math.floor(Math.random() * 2)   
    } else if (cards.length == 0) {
        randomArray = 2
    } else {
        randomArray = 1
    }

    if (randomArray == 1) {
        randomCard = Math.floor(Math.random() * (cards.length))

        document.querySelector('#secondLine').innerHTML += `
            <a id="c${cycle}">
                <img src="images/back.jpg" height="300px" id="${cards[randomCard]}">
            </a>
        `

        cards = cards.filter(pos => pos != cards[randomCard])
    } else {
        randomCard = Math.floor(Math.random() * (cards2.length))

        document.querySelector('#secondLine').innerHTML += `
            <a id="c${cycle}">
                <img src="images/back.jpg" height="300px" id="${cards2[randomCard]}">
            </a>
        `

        cards2 = cards2.filter(pos => pos != cards2[randomCard])
    }
}


let btnCards = document.querySelectorAll('a')

for (const btnCard of btnCards) {
    btnCard.addEventListener('click', function(e){
        if (firstCard == true && !this.id.includes('d')) {
            clicked = e.target
            card = this.firstElementChild.id
            cardInner = this.innerHTML
            cardClass = this.id

            this.innerHTML = `<img src="images/${this.firstElementChild.id}" height="300px" id="${this.firstElementChild.id}">`
            this.id = 'd'+this.id

            firstCard = false
        } else if (firstCard == false && !this.id.includes('d')) {
            card2Class = this.id
            
            card2 = this.firstElementChild.id
            card2Inner = this.innerHTML

            this.innerHTML = `<img src="images/${this.firstElementChild.id}" height="300px" id="${this.firstElementChild.id}">`
            this.id = 'd'+this.id
            
            if (card != card2 || cardClass == this.id) {
                setTimeout(function() {
                    document.querySelector(`#d${cardClass}`).innerHTML = cardInner
                    document.querySelector(`#d${cardClass}`).id = cardClass
                    document.querySelector(`#d${card2Class}`).innerHTML = card2Inner
                    document.querySelector(`#d${card2Class}`).id = card2Class
                }, 1500)
            }

            firstCard = true
    }})   
}