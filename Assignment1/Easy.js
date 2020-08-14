console.log("-----Question1-----");
function charCount(ch, string) {
  var count = 0;
  for (var place = 0; place < string.length; place++) {
    if (ch == string.charAt(place)) {
      count = count + 1;
    }
  }
  return count;
}
console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));
console.log("----Question2----");
function addup(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(addup(4));
console.log(addup(13));
console.log(addup(600));

console.log("----Question3----");
function replaceVowel(string) {
  for (var place = 0; place < string.length; place++) {
    if (string.charAt(place) == "a") {
      string = string.replace(string.charAt(place), 1);
    }
    if (string.charAt(place) == "e") {
      string = string.replace(string.charAt(place), 2);
    }
    if (string.charAt(place) == "i") {
      string = string.replace(string.charAt(place), 3);
    }
    if (string.charAt(place) == "o") {
      string = string.replace(string.charAt(place), 4);
    }
    if (string.charAt(place) == "u") {
      string = string.replace(string.charAt(place), 5);
    }
  }
  return string;
}
console.log(replaceVowel("karachi"));
console.log(replaceVowel("chembur"));
console.log(replaceVowel("khandbari"));
