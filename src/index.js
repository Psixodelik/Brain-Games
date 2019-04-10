import readlineSync from 'readline-sync';

export default (gameRoundQA, gameMessage) => {
  const welcomeMessage = (`Welcome to the Brain Games!${gameMessage || ''}`);
  const userName = readlineSync.question(`${welcomeMessage}\n\nMay I have your name? `);
  console.log(`Hello, ${userName}\n`);

  if (!gameRoundQA) return true;

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const gameData = gameRoundQA();
    const userAnswer = readlineSync.question(`Question: ${gameData.question}\nYour answer: `);

    if (userAnswer === gameData.correctAnswer.toString()) {
      console.log('Correct');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameData.correctAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};
