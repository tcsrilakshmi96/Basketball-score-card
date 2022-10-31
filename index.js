let count1 = 0
let count2 = 0
let winner = document.getElementById("endgame")
let homescore = document.getElementById("homescore-el")
let guestscore = document.getElementById("guestscore-el")

console.log(homescore)

function add1(){
    count1 += 1
homescore.innerText=(count1)
}

function add2(){
    count1 += 2
homescore.innerText=(count1)
}

function add3(){
    count1 += 3
homescore.innerText=(count1)
}

function add11(){
    count2 += 1
guestscore.innerText=(count2)
}

function add22(){
    count2 += 2
guestscore.innerText=(count2)
}

function add33(){
    count2 += 3
guestscore.innerText=(count2)
}

function newgame() {
    count1 = 0
    count2 = 0
    homescore.innerText=(count1)
    guestscore.innerText=(count2) 
    winner.innerText= " "
}
function endgame() {
    if (count1 > count2) {
     winner.innerText= "Winner is " + count1   
    } 
    else 
    {
    winner.innerText= "Winner is " + count2 
    }
     
}