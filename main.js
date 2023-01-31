//Whats my name?

let userName = 'Carly';

//Say hello!

if(userName) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log('Hello!');
}

//Whats my question? (and log it to console)

let userQuestion = 'Am I great at JavaScript?';

console.log(userQuestion);

//Make a random numer

let randomNumber = Math.floor(Math.random() * 8);

//Use the random number to choose a random response and assign it to eightBall

let eightBall = '';

switch (randomNumber) {
    case 0:
        eightBall = 'It is certain'
        break;
    case 1:
        eightBall = 'It is decidedly so'
        break;
    case 2:
        eightBall = 'Reply hazy try again'
        break;
    case 3:
        eightBall = 'Cannot predict now'
        break; 
    case 4:
        eightBall = 'Do not count on it'
        break; 
    case 5:
        eightBall = 'My sources say no'
        break; 
    case 6:
        eightBall = 'Outlook not so good'
        break; 
    case 7:
        eightBall = 'Signs point to yes'
        break;            
}

//Show the answer!

console.log(eightBall);

