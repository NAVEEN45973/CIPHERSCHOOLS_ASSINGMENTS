console.log("question1");
function convert(a) {
  return a * 60;
}
console.log(convert(10));
console.log(convert(12));
console.log(convert(15));

console.log("question2");
function dividesEvenly(a, b) {
  if (a % b == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(dividesEvenly(98, 7));
console.log(dividesEvenly(85, 4));
