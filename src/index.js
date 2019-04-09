import readlineSync from 'readline-sync';

const showResultMessage = (userName, win, currentAnswer, correctAnswer) => {
  if (win) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }

  console.log(`${currentAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

const getQuestionAndAnswer = (...questionParts) => {
  const question = questionParts.join(' ');
  return readlineSync.question(`Question: ${question}\nYour answer: `);
};

const gameInit = (gameMessage) => {
  const getName = () => {
    const welcomeMessage = (`Welcome to the Brain Games!${gameMessage || ''}`);
    const name = readlineSync.question(`${welcomeMessage}\n\nMay I have your name? `);

    console.log(`Hello, ${name}\n`);
    return name;
  };

  return {
    userName: getName(),
    rounds: 3,
    correctMessage: () => console.log('Correct'),
  };
};

const playGame = (gameRoundQA, gameMessage) => {
  const init = gameInit(gameMessage);

  for (let i = 0; i < init.rounds; i += 1) {
    const gameData = gameRoundQA();

    if (gameData.userAnswer === gameData.correctAnswer) {
      init.correctMessage();
    } else {
      return showResultMessage(init.userName, false, gameData.userAnswer, gameData.correctAnswer);
    }
  }

  return showResultMessage(init.userName, true);
};

const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export {
  gameInit as default,
  playGame,
  getRandomNumber,
  getQuestionAndAnswer,
};
