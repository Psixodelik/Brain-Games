import getName, { getRandomNumber, resultMessage } from '..';
import readlineSync from 'readline-sync';

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

export default () => {
  const gameMessage = '\nWhat is the result of the expression?';
  const userName = getName(gameMessage);
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const [numOne, numTwo, expression, answer] = getRandomExpression();
    const userAnswer = Number(readlineSync.question(`Question: ${numOne} ${expression} ${numTwo}\nYour answer: `));

    if (userAnswer !== answer) {
      resultMessage(userName, false, userAnswer, answer);
      return false;
    }

    console.log('Correct');
  }

  resultMessage(userName, true);
  return true;
};
