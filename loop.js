// // for loop 5 to 25
// for(let i=5;i<=25;i++){
//     console.log(i)}

// // for loop divisible by 
// for(let i=1;i<=50;i++){
//     if(i%4==0)
//         console.log(i);
//     }

// // for multiples of 3
// for(let i=3;i<=30;i+=3){
//     console.log(i)
// }

// // reverse order 100 to 80
// for(let i=100;i>=80;i--){
//     console.log(i)
// }

// // for 1 to 50 even number
// for(let i=2;i<=50;i+=2){
//     console.log(i)
// }

// //1 to that number from user
// const prompt =require('prompt-sync')()
// let n=Number(prompt("Enter user number:"))
// for (let i=1;i<=n;i++){
//     console.log(i)
// } 

// // user  number down to 1
// const prompt =require('prompt-sync')()
// let n=Number(prompt("Enter user number:"))
// for (let i=1;i<=n;i--){
//     console.log(i)
// }

// // 1 to 100 divisible to 7
// for(let i=7;i<=100;i+=7){
//     console.log(i)
// }

// // sum 1 to 20
// let sum = 0;
// for (let i = 1; i <= 20; i++) {
//   sum += i;
// }{console.log(sum); 
// }

// //  sum 1 to user number
// const prompt =require('prompt-sync')()
// let sum=0
// let n=Number(prompt("Enter user number:"))
// for(let i=1;i<=n;i++){
//     sum+=i}{
//         console.log("Sum =",sum)
//     }

// // sum of 1 to 50 even number 
// let sum=0
// for(let i=2;i<=50;i+=2){
//     sum+=i
// }{console.log(sum)}

// // sum of 1 to 50 odd number 
// let sum=0
// for(let i=3;i<=50;i+=3){
//     sum+=i
// }{console.log(sum)}

// // count even numbers in 1 to 100
// let count=0
// for(let i=1;i<=100;i++){
//     if (i%2==0){
//         count++
//     }{console.log("Enter the the number of enen number=",count)}
// }

// // count odd numbers in 1 to 100
// let count=0
// for(let i=1;i<=100;i++){
//     if (i%2!==0){
//         count++
//     }{console.log("Enter the the number of odd number=",count)}
// }

// // sum of all number divisible by 5 between 1 to 100
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         sum += i;
//     }
// }{
// console.log(sum);
// }

// // two number from user and add all number between two number
// const prompt =require('prompt-sync')()
// a=Number(prompt("Enter first number:"))
// b=Number(prompt("Enter second number:"))
// sum=0
// for(let i=a;i<=b;i++){
//     sum+=i
// }{console.log("sum =",sum)}

// // take numer from user and first 10 mltiples of the number 
// const prompt =require('prompt-sync')()
// let n=Number(prompt("Enter number:"))
// for (let i=1;i<=10;i++){
//     console.log(i*n)
// }

// // table from 1 to 5
// for(let n=1;n<=5;n++){
//     console.log("Table of",n)
// for(let i=1;i<=10;i++){
//     console.log(n*i)
// }}

// // table 10 to 1
// for(let n=10;n>=1;n--){
//     console.log("Table of",n)
//     for(let i=1;i<=10;i++){
//         console.log(n*i)
//     }        
// }

// // square of 1 to 10
// for(let i=1;i<=10;i++){
//     console.log(i*i)
// }

// // cube of 1 to 10
// for(let i=1;i<=10;i++){
//     console.log(i*i*i)
// }

// // odd or even 1 to user number
// const prompt =require('prompt-sync')()
// let n=Number(prompt("Enter number:"))
// for(let i=1;i<=n;i++){
//     console.log(i)
// if(i%2==0){
//     console.log("i is even")
// }else{
//     console.log("i is odd")
// }}

// // 1 to 100 divisible by 3 and 5
// for(let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0)
// {console.log(i)}}

// // count 1 to user number divisible by 7
// const prompt =require('prompt-sync')()
// let n=Number(prompt("Enter number:"))
// let count=0
// for(let i=1;i<=n;i++){
//     if(i%7==0){
//         count++
//     }{console.log(count)}
// }

// // two user number find even number between them
// const prompt =require('prompt-sync')()
// let a=Number(prompt("Enter first number:"))
// let b=Number(prompt("Enter second number:"))
// for(let i=a;i<=b;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// // two user number find odd number between them
// const prompt =require('prompt-sync')()
// let a=Number(prompt("Enter first number:"))
// let b=Number(prompt("Enter second number:"))
// for(let i=a;i<=b;i++){
//     if(i%3==0){
//         console.log(i)
//     }
// }

// // factorial of user number
// const prompt =require('prompt-sync')()
// let n=Number(prompt("Enter number:"))
// let factorial=1
// for(let i=1;i<=n;i++){
//     if(factorial*=i){
//         console.log(factorial)
//     }
// }

// // take two numwr from user useing for reverse loop
// const prompt =require('prompt-sync')()
// let n=Number(prompt("Enter first number:"))
// for(n>0){
//     letdigit=n%10
//     console.log(i)
// n = Math.floor(n / 10);
// }

// // reverce the digit givinby user
// const prompt = require('prompt-sync')()
// let n = Number(prompt("Enter a number: "))
// let rev = 0
// while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit
//     console.log(rev);
//     n = Math.floor(n / 10);
// }

// while (n > 0) {
//     let digit = n % 10
//     if (digit === 5) {
//         count++
//     }
//     n = Math.floor(n / 10)
// }{
// console.log("Number of 5s =", count);}

let largestNo=[0]
