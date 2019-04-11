const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const questionToString = (...data) => (data[0] instanceof Array ? data[0].join(' ') : data.join(' '));

export {
  getRandomNumber,
  questionToString,
};
