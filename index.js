let homeScore = 0
let guestScore = 0
let addHome = document.getElementById("total-score-home")
let addGuest = document.getElementById("total-score-guest")
document.getElementById("reset-btn").addEventListener("click", resetBtn)


//Home Scores
function onePointHome(){
    homeScore += 1
    addHome.textContent = homeScore
    changeColor()
}

function twoPointsHome(){
    homeScore += 2
    addHome.textContent = homeScore
    changeColor()
}

function threePointsHome(){
    homeScore += 3
    addHome.textContent = homeScore
        changeColor()
}

//Guest Scores
function onePointGuest(){
    guestScore += 1
    addGuest.textContent = guestScore
    changeColor()
}

function twoPointsGuest(){
    guestScore += 2
    addGuest.textContent = guestScore
        changeColor()
}

function threePointsGuest(){
    guestScore += 3
    addGuest.textContent = guestScore
        changeColor()
}

function resetBtn() {
    homeScore = 0
    guestScore = 0
    addGuest.textContent = guestScore
    addHome.textContent = homeScore
    addHome.style.color = "lightblue"
    addHome.style.background = "black"
    addGuest.style.color = "lightblue"    
    addGuest.style.background = "black"
}

function changeColor(){
if (homeScore > guestScore){
    addHome.style.color = "#F94F6D"
    addHome.style.background = "whitesmoke"
    addGuest.style.color = "lightblue"    
    addGuest.style.background = "black"
} else if (guestScore > homeScore){
    addHome.style.color = "lightblue"
    addHome.style.background = "black"
    addGuest.style.color = "#F94F6D"    
    addGuest.style.background = "whitesmoke"
} else {    
    addHome.style.color = "lightblue"
    addHome.style.background = "black"
    addGuest.style.color = "lightblue"    
    addGuest.style.background = "black"
}
}
