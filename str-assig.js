// // generate random number between 1 to 100 and check weathe its even or odd
// let randomNo=Math.floor(Math.random() * 100)+1
// if (randomNo%2==0){
//     console.log(randomNo," is Even")
// }else{
//     console.log(randomNo," is odd")
// }

// // take password as input and check whether it contain at least 8 characters
const prompt = require('prompt-sync')()
// let password=prompt("Enter your password:")

// if (password.length>=8){
//     console.log("Yes,password is valid:",password)
// }else{
//     console.log("No,password containat at least 8 characters")
// }

// // accept full name and display it in uppercase along with its character count
// let name="Ayush Arvind Tawate"
// let count=0
// for(let i=0;i<name.length;i++){
//         count++
//         console.log(count)
//     }

// console.log(count)

// // create a calculator which acn perforn addition subtraction multiplication and division
// let a=30
// let b=5
// console.log("Addition =",a+b)
// console.log("Subtraction =",a-b)
// console.log("Multiplication =",a*b)
// console.log("Division =",a/b)

// // Accept the sentence and count the total number of words
// let sen="Hello Ayush wlcome to javascript"
// let words=sen.split(" ")
// let count=0
// for (let i=0;i<words.length;i++){
//     count++
// }
// console.log(count)

// check whether given word is palidrome
let word=prompt("Enter your word:")
let reversed=word.split("").reverse().join("")
if (word.toLowerCase() === reversed.toLowerCase()) {
    console.log(word + " is a Palindrome");
} else {
    console.log(word + " is not a Palindrome");
}

// accept marks lof 5 subjects and calculate total marks , subjects and grade
let marksEng=prompt("Enter marks of English:")
let marksMath=prompt("Enter marks of Math:")
let marksChem=prompt("Enter marks of Chemistry:")
let marksPhy=prompt("Enter marks of Physics:")
let marksIP=prompt("Enter marks of IP:")
let totalMarks=marksEng+marksMath+marksChem+marksPhy+marksIP
console.log(totalMarks)
let percentage=(totalMarks/500)*100
console.log(percentage)
if(percentage>=0 && percentage<=30){
    console.log("F Grade")
}else if(percentage>30 && percentage<=50){
    console.log("F Grade")
}else if(percentage>50 && percentage<=60){
    console.log("F Grade")
}else if(percentage>60 && percentage<=70){
    console.log("F Grade")
}else if(percentage>70 && percentage<=80){
    console.log("F Grade")
}else if(percentage>80 && percentage<=90){
    console.log("F Grade")
}else if(percentage>90 && percentage<=100){
    console.log("F Grade")
}else{
    console.log("Failed")
}