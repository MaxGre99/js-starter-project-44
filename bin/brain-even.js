import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

const isEven = (number) => number % 2 === 0;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswersCount = 0;

while (correctAnswersCount < 3) {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  if (userAnswer.toLowerCase() !== correctAnswer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
    console.log(`Let's try again, ${name}!`);
  } else {
    correctAnswersCount += 1;
    console.log('Correct!');
  }
}
console.log(`Congratulations, ${name}!`);
