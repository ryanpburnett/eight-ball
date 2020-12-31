// magic 8-Ball

var choices = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes", "Most likely", "Outlook good.", "Yes.", "Signs point to Yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful"]

document.getElementById("button").addEventListener("click", eightBall)

function eightBall() {
var pickChoice = choices[Math.floor(Math.random() * choices.length)]
document.getElementById("result").innerHTML = pickChoice;
console.log(pickChoice)
}
