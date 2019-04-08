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

const getQuestionAndAnswer = (...questionParts) => {
  const question = questionParts.join(' ');
  return readlineSync.question(`Question: ${question}\nYour answer: `);
};

const gameInit = (gameMessage) => {
  const userName = getName(gameMessage);
  const rounds = 3;

  return [userName, rounds, () => console.log('Correct')];
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomExpression = () => {
  const numOne = getRandomNumber(0, 100);
  const numTwo = getRandomNumber(0, 100);
  const exp = ['+', '-', '*'];
  const currentExp = exp[getRandomNumber(0, 2)];
  let result = null;

  switch (currentExp) {
    case '+':
      result = numOne + numTwo;
      break;
    case '-':
      result = numOne - numTwo;
      break;
    case '*':
      result = numOne * numTwo;
      break;
    default:
      result = 'NULL';
      break;
  }

  return [numOne, numTwo, currentExp, result];
};

export {
  gameInit as default,
  resultMessage,
  getRandomNumber,
  getQuestionAndAnswer,
  getRandomExpression,
};
