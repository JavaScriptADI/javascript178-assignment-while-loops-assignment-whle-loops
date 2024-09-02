// write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".


let i = 1;

while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    
  }

  i++;
}

// write a program that prints 100 random numbers (each random number should be in the range 1-100).

let count = 0;

while (count < 100) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
  count++;
}

// write a program that prints the sum of all even numbers between 1 and 1000.

let sum = 0;
let j = 2;

while (j <= 1000) {
  sum += j;
  j += 2;
}

console.log("sum of all even numbers between 1 and 1000= ", sum);


// write a program that prints the sum of all numbers between 1 and 1000 that are divisible by 3 or 5.


let sum2 = 0;
let i2 = 1;

while (i2 <= 1000) {
  if (i2 % 3 === 0 || i2 % 5 === 0) {
    sum2 += i2;
  }
  i2++;
}

console.log("sum of all numbers between 1 and 1000 that are divisible by 3 or 5=" ,sum2);


// write a program that prints the sum of all numbers between 1 and 1000 that are divisible by both 3 and 5.

let sum3 = 0;
let i3 = 15;

while (i3 <= 1000) {
  sum3 += i3;
  i3 += 15;
}

console.log("all numbers between 1 and 1000 that are divisible by both 3 and 5=" , sum3);