let firstCard = Math.floor(Math.random() * (11 - 2) + 2)
let secondCard = Math.floor(Math.random() * (11 - 2) + 2)

let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card?")
}