let counter = 0;

const increment = () => {
  counter++;
  console.log(counter);
  return counter;
};

module.exports = {
  counter,
  increment,
};
