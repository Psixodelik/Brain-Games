import readlineSync from 'readline-sync';

const rounds = 3;

export default (getQuestionAndAnswer, gameMessage) => {
  const welcomeMessage = (`Welcome to the Brain Games!${gameMessage}`);
  const userName = readlineSync.question(`${welcomeMessage}\n\nMay I have your name? `);
  console.log(`Hello, ${userName}\n`);

  for (let i = 0; i < rounds; i += 1) {
    const { question, correctAnswer } = getQuestionAndAnswer();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer === correctAnswer.toString()) {
      console.log('Correct');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};
