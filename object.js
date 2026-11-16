// let student={
//     name: "Yash",
//     age: 22,
//     course: "Computer Engineering",
//     marks: 85
// }
// console.log(student)
// console.log(student.name)
// console.log(student.age)
// console.log(student.course)
// console.log(student.marks)

// let student = {
//     name: "Yash",
//     address: { city: "Mumbai", state: "Maharashtra" }
// };
// console.log(student.address.state)

// let student = { name: "Yash", age: 22, marks: 85 }
// for (let key in student) {
//     console.log(key, student[key])
// }

// let student = { name: "Ayush", age: 20 }
// console.log(student.name)
// console.log(student["age"])
// let key = "name"
// console.log(student[key])

// let product = { name: "Laptop", price: 50000 }
// product.brand = "HP"     
// product.price = 45000    
// delete product.brand    
// console.log(product)

// let student = {
//     name: "Yash",
//     address: { city: "Mumbai", state: "Maharashtra" }
// }
// console.log(student.address.city)

// let employee={empName:"Raj",epmId:4544,empSalary:30000}
// console.log("empName" in employee)
// console.log("empSalary" in employee)
// console.log("id" in employee)

// let students = [
//     { name: "Ayush", marks: 92 },
//     { name: "Mehtab", marks: 75 },
//     { name: "Rahul", marks: 35 },
//     { name: "Raj", marks: 28 }
// ]
// for (let i = 0; i < students.length; i++) {
//     if (students[i].marks >= 40) {
//         console.log(students[i].name + " passed")
//     } else {
//         console.log(students[i].name + " failed")
//     }
// }

// let user = { name: "Ayush", age: 20 }
// let copiedUser = { ...user }
// let changedUser = { ...user, age: 21 }
// console.log(copiedUser)
// console.log(changedUser)
// let details = { name: "Ayush" }
// let course = { skill: "JavaScript" }
// let combined = { ...details, ...course }
// console.log(combined)

// let student={name:"Yash",age:22}
// console.log(Object.entries(student))
// console.log(student.name)
// console.log(student['name'])
// console.log(student.age)
// delete student.age
// console.log(student)

// let student={name:"Yash",age:22}
// for(let key in student){
//     console.log(key,student[key])
// }

// let student={name:"Yash",age:22}
// console.log(Object.hasOwn(student,"name"))

// let student={name:"Ayush",age:22,course:"Full Stack",marks:85}
// console.log(student)
// console.log(student.name)
// console.log(student['name'])
// student.email="ayush@gmail.com"
// console.log(student)
// delete student.email
// console.log(student)
// console.log(Object.key(student))

// let employee={name:"Ayush",address:{state:"Maharashtra",city:"Mangaon"}}
// console.log(employee.address.state)
// console.log(employee.address.city)

// const prompt = require('prompt-sync')()
// let length=(Number(prompt("Enter the length of rectangle:")))
// let breadth=(Number(prompt("Enter the breadth of rectangle:")))
// let area=length*breadth
// console.log("Area of a rectangle :",area)

// let students = [
//     { name: "Ayush", marks: 92 },
//     { name: "Mehtab", marks: 75 },
//     { name: "Rahul", marks: 35 },
//     { name: "Raj", marks: 28 }
// ]
// for(let i=0;i<students.length;i++){
//     console.log(students[i])
// }
// console.log(Object.keys(students).length)

// let products=[
//     {pName: "Apple MacBook Neo", pPrices: 79900},
//     {pName: "Samsung Galaxy S26 Ultra 5G", pPrices: 112999},
//     {pName: "OnePlus Pad Go", pPrices: 17999},
//     {pName: "Foxsky 43-inch 4K Smart TV", pPrices: 23490},
//     {pName: "boAt Rockerz Plus 550", pPrices: 1699}
// ]
// products.forEach(function(products){
// console.log(products.pName)
// console.log(products.pPrices)})
// let largestPrice = 0
// let largestProduct = ""
// for (let i = 0; i < products.length; i++){
//     if (products[i].pPrices > largestPrice)
//     {
//         largestPrice = products[i].pPrices
//         largestProduct = products[i].pName
//     }
// }
// console.log("Most expensive product is:", largestProduct)

// let students = [
//     { name: "Ayush", marks: 92 },
//     { name: "Mehtab", marks: 75 },
//     { name: "Rahul", marks: 35 },
//     { name: "Raj", marks: 28 }
// ]
// for(let i=0;i<students.length;i++)
// if(students[i].marks>40){
//     console.log("student who have passed are:",students[i])
// }

// let products=[
//     {pName: "Apple MacBook Neo", pPrices: 79900},
//     {pName: "Samsung Galaxy S26 Ultra 5G", pPrices: 112999},
//     {pName: "OnePlus Pad Go", pPrices: 17999},
//     {pName: "Foxsky 43-inch 4K Smart TV", pPrices: 23490},
//     {pName: "boAt Rockerz Plus 550", pPrices: 1699}
// ]


// const prompt = require('prompt-sync')()
// function products(pName,pPrices){
// let discount=10
// finalPrices = pPrices - (pPrices * discount) / 100
//     console.log("Product Name:",pName)
//     console.log("Product Prices",pPrices)
//     console.log("Discount:",discount,"%")
//     console.log("Final price after discount:",finalPrices)
// }
// products(prompt("Product Name:"),Number(prompt("Product price:")))