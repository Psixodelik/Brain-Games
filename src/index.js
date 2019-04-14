import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (getQuestionAndAnswer, gameMessage) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameMessage);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = getQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct');
      if (i === roundsCount - 1) console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};
