const user = prompt("Enter your username: ");
let stage = 1;
let lives = 3;
const startRange = 1;
let endRange = 2;
let answer;
function guessing(end){
  answer = Math.floor(Math.random() * end);
  console.log(answer)
  console.log("Current User: " + user);
  console.log("Current Stage: " + stage);
  console.log(`Guess The Number, you have ${lives} chances`);
  console.log("Hint: number between 1 and " + end);
  let userAnswer = prompt("Enter your guess")
  console.log(userAnswer)
  if (Number(userAnswer) === answer)
  {
    console.log("win");
    stage++;
    end++;
    console.log("Next stage>>>")
    guessing(end)
  } else if ( lives === 0)
  {
    console.log(`You lasted ${stage} stages`)
  }else{
    lives--;
    console.log("lose");
    console.log("Try again")
    guessing(end)
  }
}

guessing(endRange)
