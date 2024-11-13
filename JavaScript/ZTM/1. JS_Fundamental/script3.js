// If else block

// const age = 15;
// if (age >= 18) {
//   console.log(`you are old enough for getting driving license 🚗`);
// } else {
//   let yearLeft = 18 - age;
//   console.log(`You are too young. Wait for ${yearLeft} year to get License`);
// }

// Control statement > Finding the birthCentury

const birthYear = 1995;
// ! wrong:
// const century = Number(1995 / 100) + 1; -> answer is float
const century = Math.floor(1995 / 100) + 1;
console.log(`the century in which agent is born is ${century}`);
// * the century in which agent is born is 20
