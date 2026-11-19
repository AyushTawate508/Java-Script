const prompt = require('prompt-sync')()
// // Write a JavaScript program to display “Hello, World!” in the console. 
// let a="Hello, World!"
// console.log(a)

// //  Declare variables using var, let, and const. Explain one key difference between these three declarations. 
// let age=20
// console.log(age)

// const name="Ayush"
// console.log(name)

// var city="Mumbai"
// console.log(city)

// Create variables to store your name, age, college name, and percentage. Display all the values using console.log(). 
let student={name:"Ayush",age:20,collegeName:"JMLZS",percentage:80}
console.log(student)
console.log(student.name)

// // Use the typeof operator to identify the data types of the following values: "JavaScript", 25, 10.5, true, undefined, and null. 
// let b="JavaScript"
// let c=25
// let d=10.5
// let e=true
// let f=undefined
// let g=null
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)
// console.log(typeof e)
// console.log(typeof f)
// console.log(typeof g)

// // Explain the difference between primitive and non-primitive data types in JavaScript. Give two examples of each. 
// // primitiv
// let b="JavaScript"
// let c=25
// let d=10.5
// let e=true
// let f=undefined
// let g=null
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)

// // non-primitive
// let students={name:"Ayush",age:20,collegeName:"JMLZS",percentage:80}
// console.log(students)

// // Write a program that accepts two numbers and displays their sum, difference, product, quotient, and remainder
// let no1=Number(prompt("Enter the first number:"))
// let no2=Number(prompt("Enter the second number:"))
// let add=no1+no2
// console.log("sum:",add)
// let sub=no1-no2
// console.log("difference:",sub)
// let mult=no1*no2
// console.log("product:",mult)
// let div=no1/no2
// console.log("quotient:",div)
// let rem=no1%no2
// console.log("remainder:",rem)

// // Explain the difference between == and ===. Demonstrate the difference with suitable JavaScript examples. 
console.log(9=="9")
console.log(9==="9")

// //  Predict the output of the following code and explain each result
// console.log(10 + "20"); 
// console.log("10" - 5); 
// console.log("10" * 2); 
// console.log(10 == "10"); 
// console.log(10 === "10"); 

// // Convert the strings "100", "25.5", and "50" into numbers. Demonstrate the use of Number(), parseInt(), and parseFloat(). 
// let a="100"
// let b="25.5"
// let c="50"
// console.log(Number(a))
// console.log(parseFloat(a))
// console.log(parseInt(a))
// console.log(Number(b))
// console.log(parseFloat(b))
// console.log(parseInt(b))
// console.log(Number(c))
// console.log(parseFloat(c))
// console.log(parseInt(c))

// // Predict the output of the following statements and explain truthy and falsy values:
// console.log(Boolean(0)); 
// console.log(Boolean(1)); 
// console.log(Boolean("")); 
// console.log(Boolean("Hello")); 
// console.log(Boolean(null)); 

//  Write a program to check whether a given number is positive, negative, or zero using if-else statements. 
let no=Number(prompt("Enter the number:"))
if(no>0){
    console.log("Number is positive")
}else if(no<0){
    console.log("Number is negative")
}else if(no===0){
    console.log("Number is zero")
}else {
    console.log("Please enter a valid no")
}

// Write a program to find the greatest among three numbers using conditional statements. 
let no1=Number(prompt("Enter the first number:"))
let no2=Number(prompt("Enter the second number:"))
let no3=Number(prompt("Enter the third number:"))
if(no1>no2 && no1>no3){
    console.log("no1 is greatest")
}else if(no2>no1 && no2>no3){
    console.log("no2 is greatest")
}else{
    console.log("no3 is greater")
} 

// //  Create a grading program using if-else if-else. Award grades as follows: 90–100: A, 80–89: B, 70–79: C, 6069: D, below 60: Fail. Also handle marks outside the range 0–100. 
// let marks=Number(prompt("Enter your marks:"))
// if(marks>=90 && marks<=100){
//     console.log("Grade is  'A'")
// }else if(marks>=80 && marks<=89){
//     console.log("Grade is  'B'")
// }else if(marks>70 && marks<=79){
//     console.log("Grade is  'C'")
// }else if(marks>60 && marks<=69){
//     console.log("Grade is  'D'")
// }else{
//     console.log("Failed")
// }

//  Create a simple calculator using a switch statement. It should perform addition, subtraction, multiplication, and division based on the operator entered. 
// let a=Number(prompt("Enter the first number:"))
// let b=Number(prompt("Enter the second number:"))
// let operator=prompt("Enter operation '+,-,*,/,%':")
// if (operator=="+"){
//     console.log("Addition:",a+b)
// }else if (operator=="-"){
//     console.log("Subtraction:",a-b)
// }else if (operator=="*"){
//     console.log("Multiplication",a*b)
// }else if (operator=="/"){
//     console.log("Division",a/b)
// }else if (operator=="%"){
//     console.log("Reminder",a%b)
// }else{
//     console.log("Enter correct operator")
// }

// //  Write a program using a loop to print the multiplication table of a number entered by the user. Display the table from 1 to 10. 
// let a=Number(prompt("Enter the number:"))
// for(let i=1;i<=10;i++){
//     console.log(a*i)
// }

// //  Create an array containing five student names. Display the array and print each name using a loop. 
// let name=["Ayush","Mehtab","Parth","Rahul","Pratyush"]
// for(let i=0;i<name.length;i++){
//     console.log(name[i])
// }

// //  Write a program to find the largest and smallest numbers in the array [12, 45, 7, 89, 23, 56]. 
// let a=[12, 45, 7, 89, 23, 56]
// let largest=a[0]
// for (let i=1;i<a.length;i++){
//     if(a[i]>largest){
//         largest=a[i]
//     }
// }
// console.log("largest number is:",largest)

//  Write a program to reverse a string without using the built-in reverse() method
let name="yash"
let rev= ""
for (let i=name.length-1;i>=0;i--){
    console.log(name[i])
    rev+=name[i]
}
console.log(rev)
if(name==rev){
    console.log("nummber is palindrome");
    
}else{
    console.log("not palindrom");
    
}
// // Write a program to check whether a given string is a palindrome. Example: "madam" is a palindrome. 
let word=prompt("Enter your word:")
let reversed=word.split("").reverse().join("")
if (word.toLowerCase() === reversed.toLowerCase()) {
    console.log(word + " is a Palindrome");
} else {
    console.log(word + " is not a Palindrome");
}

// // Write a program to count the number of vowels and consonants in a given string. 
// let word="Ayush Arvind Tawate"
// let vowels=0
// let consonents=0
// for (let i=0;i<word.length;i++){
//     let ch = word[i].toLowerCase()
// if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
//     vowels++
// }else if ( ch>='a' && ch<='z'){
//     consonents++
// }}
// console.log("Total vowels",vowels)
// console.log("Total consonents",consonents)

// // Write a program to count the number of words in a sentence and remove all extra spaces from the sentence.
// let sen="Hello Ayush wlcome to javascript"
// let words=sen.split(" ")
// let count=0
// for (let i=0;i<words.length;i++){
//     count++
// }
// console.log(count)

// //  Predict the output of the following code and explain why
// let a = 10; let b = "10"; 
// console.log(a + b); 
// console.log(a - b); 
// console.log(a == b); 
// console.log(a === b); 

// //  Predict the output of the following code. Explain the difference between postfix and prefix increment: 
// let x = 5; 
// console.log(x++); 
// console.log(++x); 
// console.log(x); 

// //  Predict the output of the following loop. Explain the purpose of continue: 
// for (let i = 1; i <= 5; i++) { 
//     if (i === 3) continue; 
//     console.log(i); 
// } 

// //  Predict the output of the following code and explain the effect of push() and pop(): 
// let arr = [10, 20, 30, 40]; 
// arr.push(50); 
// arr.pop(); 
// console.log(arr);
