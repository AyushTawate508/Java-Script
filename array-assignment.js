// // basic array

// let studName=['Ayush','Mehtab','Parth','Rahul','Yash']
//     console.log(studName)

// let num=[1,2,3,4,5,6,7,8,9,10]
//     console.log(num)
//     console.log(num[0],num[2],num[9])
//     console.log(num.length)
//     num[1]=11
//     console.log(num)

// let sub=[{0:'English'},{1:'Biology'},{2:'Math'},{3:'Chemistry'},{4:'Physic'}]
//     console.log(sub)
//     console.log(sub[0])
//     console.log(sub[sub.length-1])

// let prices=[1000,2000,3000,4000,5000]
// prices.forEach(prices =>{
//     console.log(prices*2)})

// prices[0]=5000
// prices[4]=1000
//     console.log(prices)

// // adding and removing elements
// prices.push(6000,7000,8000)
//     console.log(prices)

// prices.pop()
//     console.log(prices)

// studName.unshift('Raj')
//     console.log(studName)

// studName.shift()
//     console.log(studName)

// let task=['run','climb','swim'] 
//     console.log(task)
// task.push('fight')   
//     console.log(task)

// let customers=['customer1','customer2',' customer3']
//     console.log(customers)
// customers.shift()
// customers.unshift('customer4','customer5','customer6') 
//     console.log(customers)

// let shoppingCart=['Laptop','Mobile','Watch']
//     console.log(shoppingCart)
// shoppingCart.push('Powerbank')
//     console.log(shoppingCart)
// shoppingCart.pop()
//     console.log(shoppingCart)
// shoppingCart.shift()
//     console.log(shoppingCart)
// shoppingCart.unshift('Powerbank')
//     console.log(shoppingCart)

// // loops and array
// let numb=[1,2,3,4,5]
// for (let i=0;i<=numb.length-1;i++){
//     console.log(numb[i])
// }

// let i=0
// while(i<=numb.length-1){
//     console.log(numb[i])
//     i++
// }

// let total=0
// for (let i = 0; i < numb.length; i++) {
//     total = total + numb[i];
// }
//     console.log(total)

// let sum=0
// for(let i=0;i<=numb.length;i++){
//     sum+=i
// }console.log(sum/numb.length)

// let evenCount=0
// let oddCount=0
// for (let i=0;i<numb.length;i++){
//     if(numb[i]%2===0){
//         evenCount++
//         console.log("total number of even number:",evenCount)
//     }else{
//         oddCount++
//         console.log("total number of odd number:",oddCount)
//     }
// }

// let largestNo=[0]
// for(let i=0;i<numb.length;i++){
//     if(numb[i]>largestNo)
//     {
//         largestNo=numb[i]
//     }
// }
// console.log("langest number is:",largestNo)

// let smallestNo = numb[0]
// for (let i = 0; i < numb.length; i++) {
//     if (numb[i] < smallestNo) {
//         smallestNo = numb[i]
//     }
// }
// console.log("Smallest number is:", smallestNo)

// let no=[-10,-20,50,60,70,80]
// for(let i=0;i<no.length;i++){
//     if(no[i]>50){
//         console.log("Numbers greater then 50 are",no[i])
//     }
// }

// for(let i=0;i<no.length;i++){
//     if(no[i]>0){
//         console.log("Positive numbers are",no[i])
//     }
// }

// for(let i=no.length;i>=0;i--){
//         console.log(no[i])
//     }

// let no1=[1,1,2,1,3,2,4,1,2,3,5,1,5,4,6,4,5,3,2]
// let count=0
// for (let i=0;i<no1.length;i++){
//     if(no1[i]==2){
//         count++
//     }
// }
// console.log("number of times particular number appear:",count)

// for(let i=0;i<no1.length;i++){
//     console.log(no1[i])
// }


// searching and checking
let no=[101,200,300,400,500,600,700,800,900,1000]
    console.log(no.includes(200))

const name=['ayush','mehtab','rahul','parth']
    console.log(name.indexOf('rahul'))

let no1=no.find(no => no>100)
console.log(no1)

console.log(no.findIndex(no => no%5==0))

let result=[
    {name:"ayush",marks:77},
    {name:"yash",marks:85},
    {name:"raj",marks:90},
    {name:"rahul",marks:97}
]
console.log(result.some(result => result.marks>90))

console.log(result.every(result => result.marks>50))

let products=[
    {item:"bag",price:'₹600'},
    {item:"watch",price:'₹285'},
    {item:"charger",price:'₹790'},
    {item:"wallet",price:'₹920'}
]
let product = products.find(item => item.price<'₹500')
    console.log(product)
    console.log(products.indexOf("watch"))