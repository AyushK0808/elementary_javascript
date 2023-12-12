const comp_choice=document.getElementById('computer-choice')
const user_choice=document.getElementById('user-choice')
const result=document.getElementById('result')


let userc
let compc
let res
const possible=document.querySelectorAll('button')
possible.forEach(possible=>possible.addEventListener('click',(e)=>{
    userc=e.target.id
    user_choice.innerHTML=userc
    getCompChoice()
    getResult()
}))

function getCompChoice(){
    const random= Math.floor(Math.random()*possible.length)+1
    console.log(random)
    if (random===1){
        compc='Rock'
    }

    if (random===2){
        compc='Paper'
    }

    if (random===3){
        compc='Scissors'
    }
    comp_choice.innerHTML=compc
}

function getResult(){
    if (compc===userc){
        res="Damn! It's a draw!!!"
    }

    if (compc==='Rock' && userc==='Paper'){
        res="Damn! Paper powah!!!!"
    }

    if (compc==='Rock' && userc=="Scissors"){
        res="Ur scissors just got STONED!!!"
    }

    if (compc==='Paper' && userc==='Rock'){
        res="Not a rocking move there"
    }

    if (compc==='Paper' && userc==='Scissors'){
        res='Chop Chop Chop!!!!!'
    }

    if (compc==='Scissors' && userc==='Rock'){
        res='U just stoned the computerrrrr!!!!!'
    }

    if (compc==='Scissors' && userc==='Paper'){
        res='L!!!!'
    }

    result.innerHTML=res
}