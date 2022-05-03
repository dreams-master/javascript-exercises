const word = ["F", "O", "X"];
let guessed = new Array(3).fill("_");

function guessLetter(letter) {
    let oldC = 0;
    let newC = 0;

    for (let i = 0; i < guessed.length; i++) {
        if (guessed[i] === "_") {
            oldC +=1;
        }
    }

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            guessed[i] = letter;
        }
    }

    for (let i = 0; i < guessed.length; i++) {
        if (guessed[i] === "_") {
            newC +=1;
        }
    }

    if (newC < oldC) {
        console.log("Congrats, new letter " + letter)
    }

    if (newC === 0) {
        console.log("You won!")
    }

    console.log(guessed);
}


guessLetter("A");
guessLetter("O");
guessLetter("F");
guessLetter("S");
guessLetter("X");
