const prompt = require('prompt-sync')()

// function hi(name ,city){
//     console.log("hi",name,"welcome to",city)
// }
// hi("ayush","kalyan");
// hi("yash","thane");
// hi("mehtab","nahur");
// hi("rahul","bhandup");
// hi();
// hi();
// hi();
// hi();
// hi();
// hi();

// function add( a , b ){
//     console.log(a+b)
// }
// add(4,6)
// add(10,20)
// add(100,50)

// function sub( a , b ){
//     console.log(a-b)
// }
// sub(6,4)
// sub(100,20)
// sub(100,50)

// function mul(a,b){
//     console.log(a*b)
// }
// mul(46,38)
// mul(30,90)

// function div(a,b){
//     console.log(a/b)
// }
// div(46,7)
// div(300,30)

// function rem(a,b){
//     console.log(a%b)
// }
// rem(46,38)
// rem(30,90)

// function cal(number){
// if (number%2==0){
//     console.log("even")
// }else{
//     console.log("odd")
// }}
// cal(0)
// cal(1)
// cal(2)
// cal(3)
// cal(4)
// cal(5)
// cal(6)
// cal(7)
// cal(8)
// cal(9)

function num(age){
    if (age<18 && age>=0){
        console.log("You cannot vote")
    }else if (age<0 && age>150){
        console.log("Invalid age")
    }else{
        console.log("You can vote")
    }
}

num(Number(prompt("age:")))

