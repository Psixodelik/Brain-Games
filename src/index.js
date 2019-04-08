import readlineSync from 'readline-sync';

const getName = (gameMessage) => {
  const welcomeMessage = (`Welcome to the Brain Games!${gameMessage || ''}`);
  const name = readlineSync.question(`${welcomeMessage}\n\nMay I have your name? `);

  console.log(`Hello, ${name}\n`);
  return name;
};

const resultMessage = (userName, win, currentAnswer, correctAnswer) => {
  if (win) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`${currentAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log(`Let's try again, ${userName}!`);
  }
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export {
  getName as default,
  resultMessage,
  getRandomNumber,
};
