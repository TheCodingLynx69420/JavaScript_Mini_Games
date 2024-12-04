//lets go!;

//setting the variables for the browser (comp) to select (it can be any number in min or max) but for now lets just keep it 1-100;

let minNum = 1;
let maxNum = 100;

//the comp will choose any number between 1-100 because of the Math.random module;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1));

//now lets set variable for attempts so we can keep a track of your score (it would be 0 by default);
let attempts = 0;
let guess;
//setting this boolean variable to true so we can exit the game anytime we want (will set it to false later);
let running = true;

//Alright, lets add the game logic;
while (running) {
    //this will throw a window of prompt at you as soon as you open the web/html file
    guess = window.prompt(`Guess the number in between ${minNum} - ${maxNum}`);
    //by default the inputed guess would be a "string" so we have to convert it to a "Number"
    guess = Number(guess);
    //lets set some error handling (because i know there would be someone who would write other data types than a Number XD)
    if (isNaN(guess)) {
        window.alert("Please enter a valid number, you dumb?");
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a number in-between 1-100");
    }
    //the real game logic starts below:
    else {
        attempts++;
        if (guess < answer) {
            window.alert("Enter a Higher number!")
        }
        else if (guess > answer) {
            window.alert("Enter a Lower number!")
        }
        else {
            window.alert(`Congratulations!!, you guessed the number ${answer}. It took you ${attempts} attempts.`)
            //setting the running variable to false so the game stops after you have won.
            running = false;
        }

    }
}
