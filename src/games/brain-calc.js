import {
  getRandomNumber,
  getQuestionAndAnswer,
  playGame,
} from '..';

const gameMessage = '\nWhat is the result of the expression?';

const randomExpressionData = () => {
  const numOne = getRandomNumber(0, 100);
  const numTwo = getRandomNumber(0, 100);
  const mathExpression = ['+', '-', '*'];
  const currentExpression = mathExpression[getRandomNumber(0, mathExpression.length - 1)];
  let result = null;

  switch (currentExpression) {
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

  return [numOne, numTwo, currentExpression, result];
};

const gameCalc = () => {
  const [numOne, numTwo, expression, correctAnswer] = randomExpressionData();
  const userAnswer = Number(getQuestionAndAnswer(numOne, expression, numTwo));

  return {
    userAnswer,
    correctAnswer,
  };
};

export default () => playGame(gameCalc, gameMessage);
