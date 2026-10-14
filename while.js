const prompt = require('prompt-sync')()


// // even number between 1 to 20
// let i=0
// while(i<=20){
//     if(i%2==0){
//         console.log(i,"number is even")
//     }i++
// }

// // odd number between 1 to 20
// let i=0
// let sum=0
// while(i<=50){
//     if(i%2!=0){
//         console.log(i,"number is odd")
//         sum=sum+i
//         console.log(sum);
        
//     }
//     i++
// }

// // game
// let cn=25
// let n = Number(prompt("Enter a number: "))
// while(n!=25){
//         console.log("try again")
// n = Number(prompt("Enter a number: "))
// if(n==cn){
// console.log("you win")}}

// // enter phone pin
// const cpin=4544
// let pin = Number(prompt("pin: "))
// let attempt=0
// while(pin!=4544 && attempt<3){
//         console.log("Wrong pin!Try again")
// pin = Number(prompt("pin: "))
// attempt++}
// if(pin==cpin){
//         console.log("Phone unlocked")}
// else{
//         console.log("phone lock too many wrong attempts")
// }


// // chatgpt enter mobile pin
// const cpin=1234
// let pin = Number(prompt("pin: "))
// let attempt=0
// while(attempt<3){
//         pin = Number(prompt("pin: "))
//         attempt++
//         if(pin==cpin){
//                 console.log("phone unlocked")
//         }else{
//                 console.log("Wring pin! try again")
//         }
// }
// if (attempt===3){
//         console.log("phone lock too many wrong attempts")
// }


// // rock paper scissor where c is computer and m is user
// let p1 = prompt("player 1:");
// let p2 = prompt("Player 2:");
// if((p1=="scissors" && p2=="rock")||(p1=="rock" && p2=="paper")||(p1=="paper" && p2=="scissors")||(p1==3 && p2==1)||(p1==1 && mp2==2)||(p1==2 && p2==3)){
//         console.log("p2 wins")
// }else if((p1=="paper" && p2=="rock")||(p1=="scissors" && p2=="paper")||(p1=="rock" && p2=="scissors")||(p1==2 && p2==1)||(p1==3 && p2==2)||(p1==1 && p2==3)){
//         console.log("p1 wins")
// } else if((p2=="scissors" && p1=="scissors")||(p2=="rock" && p1=="rock")||(p2=="paper" && p1=="paper")||(p2==3 && p1==3)||(p2==1 && p1==1)||(p2==2 && p1==2)){
//         console.log("draw")
// }else{
//         console.log("wrong input")
// }