// Exercise 1: Grade calculator
function getGrade(s) {
  if (s < 0 || s > 100) return "Invalid Score";
  if (s >= 70) return "A";
  if (s >= 60) return "B";
  if (s >= 50) return "C";
  return "F";
}
console.log("=== Exercise 1: Grade Calculator ===");
[85, 70, 65, 60, 55, 50, 49, 0, 100, -5, 101].forEach(s => console.log("Score " + s + " -> " + getGrade(s)));

// Exercise 2: Number guessing game (1 to 100, 5 attempts)
console.log("\n=== Exercise 2: Number Guessing Game ===");
const secret = Math.floor(Math.random() * 100) + 1;
let low = 1, high = 100, won = false;
for (let n = 1; n <= 5 && !won; n++) {
  const guess = Math.floor((low + high) / 2);
  if (guess === secret) { console.log("Attempt " + n + ": " + guess + " -> Correct! You win."); won = true; }
  else if (guess < secret) { console.log("Attempt " + n + ": " + guess + " -> Too low"); low = guess + 1; }
  else { console.log("Attempt " + n + ": " + guess + " -> Too high"); high = guess - 1; }
}
if (!won) console.log("Out of attempts. The number was " + secret + ".");

// Exercise 3: FizzBuzz from 1 to 30
console.log("\n=== Exercise 3: FizzBuzz ===");
for (let i = 1; i <= 30; i++) console.log(i % 15 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i);