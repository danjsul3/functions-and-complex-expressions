// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(one, two){
  var maximum;
  if(one > two) {
      maximum = one;
    } else if(one === two){
      maximum = "equal";
    } else {
      maximum = two;
    }
};


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(one, two, three){
    var max;
    if(one > two) {
      max = one;
    } else {
      max = two;
    }
    if(max < three) {
      max = three;
    }
  return max;
}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  var isAVowel = ""
  for (i = 0; i < vowels.length; i++)
    if (char === vowels[i]) {
      isAVowel = "vowel";
    } else {
      isAVowel = "not a vowel";
    }
  return isAVowel;
}


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:

function sum(one, two) {
  var total = one + two;
  return total;
}


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:

function avg(one, two, three) {
  var avg = ((one + two + three) / 2);
  return avg;
}

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:

function getLength(str) {
  var howLong = str.length;
  return howLong;
}


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:

function greaterThan(one, two) {
  var test = false;
  if(two > one) {
    var test = false;
  }
  return test;
}


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

function greet(nme) {
  var greetingBegin = "Hello, ";
  var greetingEnd = ". How are you today?";
  var greetingCombined = greetingBegin + nme + greetingEnd;
  return greetingCombined;
}
// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:

function madLib(wordOne, wordTwo, wordThree, wordFour) {
  var part1 = "One ";
  var part2 = " can ";
  var part3 = " all of the "
  var part4 = " if you "
  var part5 = "."
  var toSentence = part1 + wordOne + part2 + wordTwo + part3 + wordThree + part4 + wordFour;
  return toSentence;
}
