const ArrayList = ["rock", "paper", "scissor"]

const randomNumber = Math.floor(Math.random() *3)
const computerChoice = ArrayList[randomNumber]


const userChioce = prompt("Choose one of them: Rock | Paper | Scissor")

if(userChioce){
    console.log(`You Choose: ${userChioce}`)
    console.log(`Computer Choice: ${computerChoice}`)
}else{
    console.log("You cheated!")
}

    
if(userChioce == computerChoice){
    console.log("No one wins!")
}else if(userChioce ==="rock"){
    if(computerChoice === "scissor"){
        console.log("You win !")
    }else{
        console.log("you lose !")
    }
} else if(userChioce === "paper"){
    if(computerChoice === "scissor"){
        console.log("You lose!")
    }else{
        console.log("You Win !")
    }
} else if(userChioce==="scissor"){
    if(computerChoice === "rock"){
        console.log("You lose !")
    }else{
        console.log("You win !")
    }
}

