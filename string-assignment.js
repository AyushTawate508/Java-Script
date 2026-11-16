// write a program to find the absolute value of -25
console.log(Math.abs(-25))

// find the square root of 144
console.log(Math.sqrt(144))

// calculate 5 raised to power 3
console.log(Math.pow(5,3))

// generate a random number between 1 to 100
console.log(Math.floor(Math.random()*100)+1)

// round 45.678 to the nearest integer
console.log(Math.round(45.678))

// convert 23.99 into the greatest integer less than or equal to it
console.log(Math.floor(23.99))

// convert 12.2 into the smallest integer greater than or equal to it
console.log(Math.ceil(12.2))

// find the largest number among 10,25,5,40 and 15
console.log(Math.max(10,25,5,40,15))

// find the smallest number among 10,25,5,40 and 15
console.log(Math.min(10,25,5,40,15))

// calculate the area of a circle with radius 7
let r=7
console.log(Math.PI*Math.pow(r,2))

// generate random 6 digit number
console.log(Math.ceil(100000+Math.random()*900000)) 

// find a cube root of 216
console.log(Math.cbrt(216))

// calculate 2 raised to power 5
console.log(Math.pow(2,5))

// generate random dice number between 1 to 6
console.log(Math.floor(Math.random()*5)+1)

// calculate the  student's percentage and round it to 2 decimal places
console.log(Math.round(78.95))

// create the string containing your full name and display its total number of character
let name=("Ayush Arvind Tawate")
console.log(name.length)

// convert "hello world" into uppercase
let a=("hello world")
console.log(a.toUpperCase())

// convert "welcome to javascript" into lowercase
let b=("WELCOME TO JAVASCRIPT")
console.log(b.toLowerCase())

// extract first 5 characters of "JavaScript"
let c="JavaScript"
console.log(c.slice(0,5))

// extract script from javascript
console.log(c.slice(4))

// check whether "javascript is easy" contain word "easy"
let d="JavaScript is easy"
if (d.includes("easy")){
    console.log("Yes , 'JavaScript is easy' does contain word 'easy'")
}else{
    console.log("No , 'JavaScript is easy' does not coin 'easy'")
}

// check whether sentence starts with "hello"
let e="hello ayush"
console.log(e.startsWith("hello"))

// check whether email ends with "com"
let f="user@example.com"
console.log(f.endsWith("com"))

// replace "Java" with "python" in "Java is powerful"
let g="Java is powerful"
console.log(g.replace("Java", "Python"))

// remove the space from "   hello javascript   "
let h="   hello javascript   "
console.log(h.trim())

// convert "apple,banana,mango" into separate elements
let i="apple,banana,mango"
console.log(i.split(","))

// find the position of script in "JavaScript"
let j="JavaScript"
console.log(j.indexOf("Script"))

// display "hello" 5 times
let k="hello "
console.log(k.repeat(5))

// reverse the give string
const prompt = require('prompt-sync')()
let str=prompt("Enter the string:")
let reversed=""
for(let i=str.length-1;i>=0;i--){
    reversed+=str[i]
}
console.log(reversed)

// count the vowels in string
let str1=prompt("Enter the string:")
let count=0
for(let i=0;i<str1.length;i++){
    if(str1[i]=='a'||str1[i]=='e'||str1[i]=='i'||str1[i]=='o'||str1[i]=='u'){
        count++
    }
}
console.log("Number of vowels in the string:", count)

