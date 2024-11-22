// 1. write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 2. write a program that prints 100 random numbers (each random number should be in the range 1-100).

for (let i = 0; i < 100; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
} // es ar vicodi rogor gameketa amitomac chatgpts vkitxe

// 3. write a program that prints the sum of all even numbers between 1 and 1000.

let sum = 0;
for (let i = 2; i <= 1000; i += 2) {
    sum += i;
}
if (sum % 2 === 0) {
    console.log(sum)
} else {
    console.log('not even')
}

// 4. write a program that prints the sum of all numbers between 1 and 1000 that are divisible by 3 or 5.

let sum4 = 0;
for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum4 += i;
    }
}
console.log(sum4);

// 5. write a program that prints the sum of all numbers between 1 and 1000 that are divisible by both 3 and 5.

let sum5 = 0;
for (let i = 15; i < 1000; i += 15) {
    sum5 += i;
}
console.log(sum5);