const prompt = require('prompt-sync')()

let unit = prompt("Unit converting kilometer into meter , meter into kilometer , meter into centimeter , ...... :")

let length = (Number(prompt("Measurement:")))
let convertedLength=0

if (unit === "1") {
    convertedLength = length/1000
    console.log("After converting kilometer into meter:",convertedLength)
}else if (unit === "2") {
    convertedLength = length*1000
    console.log("After converting meter into kilometer:",convertedLength)
}else if (unit === "3") {
    convertedLength = length*100
    console.log("After converting meter into centimeter:",convertedLength)
}else if (unit === "4") {
    convertedLength = length/100
    console.log("After converting centimeter into meter:",convertedLength)
}else if (unit === "5") {
    convertedLength = length*10
    console.log("After converting centimeter into millimeter:",convertedLength)
}else if (unit === "6") {
    convertedLength = length/10
    console.log("After converting millimeter into centimeter:",convertedLength)
}else if (unit === "7") {
    convertedLength = length*12
    console.log("After converting foot into inch:",convertedLength)
}else if (unit === "8") {
    convertedLength = length/12
    console.log("After converting inch into foot:",convertedLength)
}else if (unit === "9") {
    convertedLength = length*3
    console.log("After converting yard into foot:",convertedLength)
}else if (unit === "10") {
    convertedLength = length/3
    console.log("After converting foot into yard:",convertedLength)
}else if (unit === "11") {
    convertedLength = length*5,280
    console.log("After converting mile into foot:",convertedLength)
}else if (unit === "12") {
    convertedLength = length*1,760
    console.log("After converting mile into yard:",convertedLength)
}else if (unit === "13") {
    convertedLength = length*2.5
    console.log("After converting inch into centimeter:",convertedLength)
}else if (unit === "14") {
    convertedLength = length/2.5
    console.log("After converting centimeter into inch:",convertedLength)
}else if (unit === "15") {
    convertedLength = length*1.60934
    console.log("After converting mile into kilometer:",convertedLength)
}else if (unit === "16") {
    convertedLength = length/1.60934
    console.log("After converting kilometer into mile:",convertedLength)
}else if (unit === "17") {
    convertedLength = length*0.3048
    console.log("After converting feet into meter:",convertedLength)
}else if (unit === "18") {
    convertedLength = length/0.3048
    console.log("After converting meter into feet:",convertedLength)
}else {
    console.log("Invalid unit")
}