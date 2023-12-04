//1- Write a program that allow to user enter number then print it

var userNum;
userNum = Number(window.prompt("Enter your num"));
console.log(userNum);

/* 2-Write a program that take number from user then print yes if that number can divide by 3
and 4 otherwise print no */
var num;
num = Number(window.prompt("Enter num"));

if (num % 3 === 0 && num % 4 === 0) {
  console.log("yes");
} else {
  console.log("no");
}

//3- Write a program that allows the user to insert 2 integers then print the max
var fNum;
var sNum;
fNum = Number(window.prompt("enter your first number"));
sNum = Number(window.prompt("enter your second number"));
if (fNum > sNum) {
  console.log(fNum);
} else {
  console.log(sNum);
}

/* 4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive. */

var user_num;
user_num = Number(window.prompt("enter integer number"));
if (user_num <= 0) {
  console.log("negative");
} else {
  console.log("positive");
}

/* 5- Write a program that take 3 integers from user then print the max element
and the min element.*/
var num1;
var num2;
var num3;
num1 = Number(window.prompt("enter number one"));
num2 = Number(window.prompt("enter number two"));
num3 = Number(window.prompt("enter number three"));
if (num1 >= num2 && num1 >= num3) {
  console.log("max number=" + " " + num1);
} else if (num2 >= num1 && num2 >= num3) {
  console.log("max number=" + " " + num2);
} else {
  console.log("max number=" + " " + num3);
}
// min number
if (num1 <= num2 && num1 <= num3) {
  console.log("min number=" + " " + num1);
} else if (num2 <= num1 && num2 <= num3) {
  console.log("min number=" + " " + num2);
} else {
  console.log("min number=" + " " + num3);
}

/* 6- Write a program that allows the user to insert integer number then
check If a number is oven or odd */
var number;
number = Number(window.prompt("enter number"));
if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

/* 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
then print vowel otherwise print consonant */

var char;
char = window.prompt("Enter character");
if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  console.log("vowel");
} else {
  console.log("constant");
}

/* 9- Write a program that allows user to insert integer then print all numbers between
1 to that’s number*/

var integer;
integer = Number(window.prompt("enter integer"));
for (i = 1; i <= integer; i++) {
  console.log(i);
}

// 10- Write a program that allows user to insert integer then print a multiplication table up to 12.

var multiplier = Number(
  prompt("Enter an integer for the multiplication table:")
);

for (var i = 1; i <= 12; i++) {
  var result = multiplier * i;
  console.log(`${multiplier} * ${i} = ${result}`);
}

/* 11- Write a program that allows to user to insert number then print all even numbers
between 1 to this number*/
var _number;
_number = Number(window.prompt("enter number for print all even numbers"));
for (var i = 2; i <= _number; i += 2) {
  console.log(i);
}
// 12- Write a program that take two integers then print the power

var base = parseInt(prompt("Enter the base (an integer):"));
var exponent = parseInt(prompt("Enter the exponent (an integer):"));

if (
  isNaN(base) ||
  isNaN(exponent) ||
  !Number.isInteger(base) ||
  !Number.isInteger(exponent)
) {
  console.log("Please enter valid integers for both the base and exponent.");
} else {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= base;
  }

  console.log(`${base}^${exponent} = ${result}`);
}

/*Write a program to enter marks of five subjects and calculate total, average and
percentage.*/

var subject1 = Number(prompt("Enter marks for subject 1:"));
var subject2 = Number(prompt("Enter marks for subject 2:"));
var subject3 = Number(prompt("Enter marks for subject 3:"));
var subject4 = Number(prompt("Enter marks for subject 4:"));
var subject5 = Number(prompt("Enter marks for subject 5:"));

if (
  isNaN(subject1) ||
  isNaN(subject2) ||
  isNaN(subject3) ||
  isNaN(subject4) ||
  isNaN(subject5)
) {
  console.log("Please enter valid numeric marks for all subjects.");
} else {
  var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
  var averageMarks = totalMarks / 5;
  var percentage = (totalMarks / 500) * 100;

  console.log(`Total Marks: ${totalMarks}`);
  console.log(`Average Marks: ${averageMarks}`);
  console.log(`Percentage: ${percentage.toFixed(2)}%`);
}

/* 13-Write a program to input month number and print number of days in that
 month by js*/

var monthNumber = Number(prompt("Enter the month number (1-12):"));

if (
  isNaN(monthNumber) ||
  monthNumber < 1 ||
  monthNumber > 12 ||
  !Number.isInteger(monthNumber)
) {
  console.log("Please enter a valid month number between 1 and 12.");
} else {
  var daysInMonth;
  switch (monthNumber) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      daysInMonth = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      daysInMonth = 30;
      break;
    case 2: // February
      daysInMonth = 28;
      break;
  }

  console.log(`Number of days in month ${monthNumber}: ${daysInMonth}`);
}

/* Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade */
// Input marks for five subjects from the user
var physicsMarks = Number(prompt("Enter marks for Physics:"));
var chemistryMarks = Number(prompt("Enter marks for Chemistry:"));
var biologyMarks = Number(prompt("Enter marks for Biology:"));
var mathematicsMarks = Number(prompt("Enter marks for Mathematics:"));
var computerMarks = Number(prompt("Enter marks for Computer:"));

if (
  isNaN(physicsMarks) ||
  isNaN(chemistryMarks) ||
  isNaN(biologyMarks) ||
  isNaN(mathematicsMarks) ||
  isNaN(computerMarks)
) {
  console.log("Please enter valid numeric marks for all subjects.");
} else {
  var totalMarks =
    physicsMarks +
    chemistryMarks +
    biologyMarks +
    mathematicsMarks +
    computerMarks;
  var percentage = (totalMarks / 500) * 100;

  var grade;
  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log(`Total Marks: ${totalMarks}`);
  console.log(`Percentage: ${percentage.toFixed(2)}%`);
  console.log(`Grade: ${grade}`);
}

/*15- Write a program to print total number of days in month
 */
var monthNumber2 = Number(prompt("Enter the month number (1-12):"));

if (
  isNaN(monthNumber2) ||
  monthNumber2 < 1 ||
  monthNumber2 > 12 ||
  !Number.isInteger(monthNumber2)
) {
  console.log("Please enter a valid month number between 1 and 12.");
} else {
  var daysInMonth;
  switch (monthNumber2) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      daysInMonth = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      daysInMonth = 30;
      break;
    case 2: // February
      daysInMonth = 28;
      break;
  }

  console.log(`Number of days in month ${monthNumber2}: ${daysInMonth}`);
}

//16- Write a program to check whether an alphabet is vowel or consonant
var alphabet = prompt("Enter a single alphabet:").toLowerCase();

switch (alphabet) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    result = "vowel";
    break;
  default:
    result = "consonant";
}

console.log(`The alphabet '${alphabet}' is a ${result}.`);

//Write a js program to find maximum between two numbers using switch case

var num1 = Nunber(prompt("Enter the first number:"));
var num2 = Nunber(prompt("Enter the second number:"));

if (isNaN(num1) || isNaN(num2)) {
  console.log("Please enter valid numeric values.");
} else {
  switch (true) {
    case num1 > num2:
      console.log(`The maximum is: ${num1}`);
      break;
    case num1 < num2:
      console.log(`The maximum is: ${num2}`);
      break;
    default:
      console.log("The numbers are equal.");
  }
}

//18- Write a program to check whether a number is even or odd
// Input a number from the user
var number = parseInt(prompt("Enter a number:"));

if (isNaN(number)) {
  console.log("Please enter a valid numeric value.");
} else {
  switch (number % 2) {
    case 0:
      console.log(`${number} is even.`);
      break;
    case 1:
    case -1:
      console.log(`${number} is odd.`);
      break;
    default:
      console.log("Invalid input.");
  }
}

//19- Write a program to check whether a number is positive or negative or zero

var number = parseFloat(prompt("Enter a number:"));

if (isNaN(number)) {
  console.log("Please enter a valid numeric value.");
} else {
  switch (Math.sign(number)) {
    case 1:
      console.log(`${number} is positive.`);
      break;
    case -1:
      console.log(`${number} is negative.`);
      break;
    case 0:
      console.log(`${number} is zero.`);
      break;
    default:
      console.log("Invalid input.");
  }
}

//20- Write a program to create Simple Calculator

var num1 = parseFloat(prompt("Enter the first number:"));
var operator = prompt("Enter the operator (+, -, *, /):");
var num2 = parseFloat(prompt("Enter the second number:"));

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      console.log("Cannot divide by zero.");
    }
    break;
  default:
    console.log("Invalid operator.");
}

console.log(`Result: ${result}`);
