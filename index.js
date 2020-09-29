let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let number = [Math.floor(Math.random() * 100)];
var counter = 0;
var maxGuesses = 10;
var maxGuessesCount = 10;

btn.addEventListener('click', function () {
    let input = document.getElementById('userInput').value;
    document.getElementById('userInput').value = '';
    counter++;
    maxGuessesCount--;
    
    document.getElementById('out').innerHTML = maxGuessesCount;

    if (counter == maxGuesses) {
        alert("Game Over");
        document.getElementById('randomnumber').innerHTML=number
        document.getElementById("btn").disabled = true;
        document.getElementById("restart").style.display = 'block';
    }
    if (input == number) {
        output.innerHTML = `You guessed right,your number was ${number}`;
        document.getElementById("btn").disabled = true;
        document.getElementById("restart").style.display = 'block';
    } else if (input < number) {
        output.innerHTML = "you guessed too low!"
    };
    if (input > number) {
        output.innerHTML = "you guessed too high!"
    }
})

document.getElementById('restart').onclick = function () {
    document.getElementById('userInput').value = '';
    number = Math.floor((Math.random() * 100));
    counter = 0;
    // maxGuesses=5;
    maxGuessesCount = 10;
    document.getElementById('out').innerHTML = maxGuessesCount
    document.getElementById("btn").disabled = false;
    document.getElementById("input").value = '';
    document.getElementById("restart").style.display = '';
}