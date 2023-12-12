const cardArr=[
    {
        name:'vader',
        img:'C:/Users/theof/elementary_javascript/memorygame/images/vader.jpeg'
    },
    {
        name:'dooku',
        img:'C:/Users/theof/elementary_javascript/memorygame/images/dooku.png'
    },
    {
        name:'maul',
        img:'C:/Users/theof/elementary_javascript/memorygame/images/maul.jpeg'
    },
    {
        name:'kylo',
        img:'C:/Users/theof/elementary_javascript/memorygame/images/kylo.png'
    },
    {
        name:'sidious',
        img:'C:/Users/theof/elementary_javascript/memorygame/images/sidious.jpeg'
    },
    {
        name:'shin',
        img:'C:/Users/theof/elementary_javascript/memorygame/images/shin.jpg'
    },
    {
        name:'vader',
        img:'C:/Users/theof/elementary_javascript/memorygame/images/vader.jpeg'
    },
    {
        name:'dooku',
        img:'C:/Users/theof/elementary_javascript/memorygame/images/dooku.png'
    },
    {
        name:'maul',
        img:'C:/Users/theof/elementary_javascript/memorygame/images/maul.jpeg'
    },
    {
        name:'kylo',
        img:'C:/Users/theof/elementary_javascript/memorygame/images/kylo.png'
    },
    {
        name:'sidious',
        img:'C:/Users/theof/elementary_javascript/memorygame/images/sidious.jpeg'
    },
    {
        name:'shin',
        img:'C:/Users/theof/elementary_javascript/memorygame/images/shin.jpg'
    },
]

cardArr.sort(()=>0.5-Math.random())
console.log(cardArr)
const gridDisp=document.querySelector('#grid')
const resDisp= document.querySelector('#score')

let chosen=[]
let chosenID=[]
const cardsWon=[]
createGrid()

function createGrid(){
    for(let i=0;i<cardArr.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src','C:/Users/theof/elementary_javascript/memorygame/images/blank.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',cardFlip)
        gridDisp.appendChild(card)
    }
}

function cardFlip(){

    let cardId= this.getAttribute('data-id')
    chosenID.push(cardId)
    chosen.push(cardArr[cardId].name)
    this.setAttribute('src',cardArr[cardId].img)
    if (chosen.length===2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    const cards=document.querySelectorAll('img')
    console.log("checking")

    if (chosenID[0]==chosenID[1]){
        alert("pick a different card!!1 YOU MORON!!!")
        cards[chosenID[0]].setAttribute('src','C:/Users/theof/elementary_javascript/memorygame/images/blank.jpg')
        cards[chosenID[1]].setAttribute('src','C:/Users/theof/elementary_javascript/memorygame/images/blank.jpg')
    }
    if (chosen[0]==chosen[1] && chosenID[0]!=chosenID[1]){
        alert("match found")
        cards[chosenID[0]].setAttribute('src','C:/Users/theof/elementary_javascript/memorygame/images/red lightsaber.jpg')
        cards[chosenID[1]].setAttribute('src','C:/Users/theof/elementary_javascript/memorygame/images/red lightsaber.jpg')
        cards[chosenID[0]].removeEventListener('click',cardFlip)
        cards[chosenID[1]].removeEventListener('click',cardFlip)
        cardsWon.push(chosen)
    }
    else{
        alert("skill issue")
        cards[chosenID[0]].setAttribute('src','C:/Users/theof/elementary_javascript/memorygame/images/blank.jpg')
        cards[chosenID[1]].setAttribute('src','C:/Users/theof/elementary_javascript/memorygame/images/blank.jpg')
    }
    if (cardsWon!=[]){
        let res= cardsWon.length
        resDisp.innerHTML=res
        }
    chosen=[]
    chosenID=[]
    
    if (cardsWon.length===cardArr.length/2){
        alert("WELL DONE! GAME OVER!!")
        resDisp.textContent=cardsWon.length
    }

}

