function getComputerChoice(){
    let num = Math.floor(Math.random() *3)
    if(num==0){
        return "Paper"
    }
    else if(num==1){
        return "Rock"
    }
    else{
        return "Scissors"
    }
}
function getPlayerChoice(){
    let playerSelection = prompt("Chose between rock, paper and scissors")

    if(playerSelection.toLowerCase()=="paper"
    ||playerSelection.toLowerCase()=="rock"
    ||playerSelection.toLowerCase()=="scissors"){
        return playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)
    }
    else{
        console.log("You entered: "+ playerSelection+"\n Please enter a valid answer")
        return getPlayerChoice()
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection==computerSelection){
        console.log("It's a tie, both players have chosen "+computerSelection)
        return "Tie"
    }
    else if(playerSelection=="Paper"&&computerSelection=="Rock"
    ||playerSelection=="Scissors"&&computerSelection=="Paper"
    ||playerSelection=="Rock"&&computerSelection=="Scissors"){
        console.log("You win! "+ playerSelection + " beats "+ computerSelection)
        return "Player"
    }
    else{
        console.log("You lose. "+computerSelection+" beats "+ playerSelection)
        return "CPU"
    }
}
  
let Match = 0
  for (let i = 0; i < 5;i++) {
    let result = playRound(getPlayerChoice(),getComputerChoice())
    if(result=="Player"){
        Match++
    }
    else if(result=="CPU"){
        Match--
    }
    else{}
}
if(Match>0){
    console.log("Congratulations you win the best of 5!")

}
else if(Match<0){
    console.log("Sorry, the computer wins")
}
else{
    console.log("Wow! The match was a tie!")
}