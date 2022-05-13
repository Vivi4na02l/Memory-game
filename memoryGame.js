let origin = ["florença.jpg","genebra.jpg","porto.jpg","barcelona.jpg"]
let cards = origin
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
let btnCards = ''

let width = window.innerWidth
document.querySelector("#cardsBoard").style.width = `${width*0.8}px`
let boardWidth = parseInt(document.querySelector("#cardsBoard").style.width.slice(0, -2))

window.addEventListener('resize', function() {
    width = window.innerWidth
    document.querySelector("#cardsBoard").style.width = `${width*0.8}px`
    boardWidth = parseInt(document.querySelector("#cardsBoard").style.width.slice(0, -2))
});

putCards(null, origin, cards, cards2)

document.querySelector('#nbrCards').addEventListener('change', function(){
    document.querySelector('#firstLine').innerHTML = ''
    document.querySelector('#secondLine').innerHTML = ''

    putCards(document.querySelector('#nbrCards').value, origin, cards, cards2)
})

function putCards(quantity, origin, cards, cards2) {
    cycle = 0

    if (quantity == null) {
        quantity = 4

        cards = origin
        cards2 = cards
    } else {
        quantity = (document.querySelector('#nbrCards').value) / 2

        cards = origin
        cards2 = []
        for (let i = 0; i < quantity; i++) {
            randomCard = Math.floor(Math.random() * (cards.length))
            if (!cards2.find(card => card == cards[randomCard])) {
                cards2.push(cards[randomCard])   
            } else {
                i -= 1
            }
        }

        cards = cards2
    }

    for (let i = 0; i < quantity; i++) {
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
                <a id="c${cycle}" style="margin: 5px;">
                    <img src="images/back.jpg" width="${boardWidth/5}" id="${cards[randomCard]}">
                </a>
            `
    
            cards = cards.filter(pos => pos != cards[randomCard])
        } else {
            randomCard = Math.floor(Math.random() * (cards2.length))
    
            document.querySelector('#firstLine').innerHTML += `
                <a id="c${cycle}" style="margin: 5px;">
                    <img src="images/back.jpg" width="${boardWidth/5}" id="${cards2[randomCard]}">
                </a>
            `
    
            cards2 = cards2.filter(pos => pos != cards2[randomCard])
        }
    }
     
    for (let i = 0; i < quantity; i++) {
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
                <a id="c${cycle}" style="margin: 5px;">
                    <img src="images/back.jpg" width="${boardWidth/5}" id="${cards[randomCard]}">
                </a>
            `
    
            cards = cards.filter(pos => pos != cards[randomCard])
        } else {
            randomCard = Math.floor(Math.random() * (cards2.length))
    
            document.querySelector('#secondLine').innerHTML += `
                <a id="c${cycle}" style="margin: 5px;">
                    <img src="images/back.jpg" width="${boardWidth/5}" id="${cards2[randomCard]}">
                </a>
            `
    
            cards2 = cards2.filter(pos => pos != cards2[randomCard])
        }
    }
    
    
    btnCards = document.querySelectorAll('a')
    
    for (const btnCard of btnCards) {
        btnCard.addEventListener('click', function(e){
            if (firstCard == true && !this.id.includes('d')) {
                clicked = e.target
                card = this.firstElementChild.id
                cardInner = this.innerHTML
                cardClass = this.id                
    
                this.innerHTML = `<img src="images/${this.firstElementChild.id}" width="${boardWidth/5}" id="${this.firstElementChild.id}">`
                this.id = 'd'+this.id
    
                firstCard = false
            } else if (firstCard == false && !this.id.includes('d')) {
                card2Class = this.id
                
                card2 = this.firstElementChild.id
                card2Inner = this.innerHTML
    
                this.innerHTML = `<img src="images/${this.firstElementChild.id}" width="${boardWidth/5}" id="${this.firstElementChild.id}">`
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
}