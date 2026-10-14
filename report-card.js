const prompt = require('prompt-sync')()
let studName=prompt("Student Name:")
let div=prompt("Division:")
let rollNo=Number(prompt("Roll no:"))
let a=Number(prompt("English Marks:"))
let b=Number(prompt("Hindi Marks:"))
let c=Number(prompt("Marathi Marks:"))
let d=Number(prompt("History Marks:"))
let e=Number(prompt("Geography Marks:"))

// No of subject
let totalSubject=6
console.log("No of Subject:",totalSubject)

// Total Marks
let totalMarks= 500
console.log("Total Marks:",totalMarks)

// Total Marks of Student
let marksObtained=a+b+c+d+e
console.log("Marks Obtained:",marksObtained)

// Average Marks
let averageMarks=marksObtained/totalSubject
console.log("Average Marks:",averageMarks)

// Percentage
let Percentage=(marksObtained/totalMarks)*100
console.log("Percentage:",Percentage)

// Grade
if(Percentage>=80 && Percentage<=100){
    console.log("You have got A grade")
}else if(Percentage>=60 && Percentage<80){
    console.log("You have got B grade")
}else if(Percentage>=30 && Percentage<60){
    console.log("You have got C grade")
}else if(Percentage>=0 && Percentage<0){
    console.log("You are Fail")
}else{
    console.log("Please enter a valid percentage");
 }

