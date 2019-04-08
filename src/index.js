import readlineSync from 'readline-sync';

export default (gameMessage) => {
  const welcomeMessage = (`Welcome to the Brain Games!${gameMessage || ''}`);
  const name = readlineSync.question(`${welcomeMessage}\n\nMay I have your name? `);

  console.log(`Hello, ${name}\n`);
  return name;
};
