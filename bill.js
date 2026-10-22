const prompt = require('prompt-sync')()
// // Electricity bill
// function bill(unit,amount){
//     console.log("bill based on units consumed :",unit*amount)}
// bill(100,5)
// bill(100,7)
// bill(200,10)

// // Parking fees
// function fee(time,amount){
//     console.log("charges based on number of hours :",time*amount)}
// fee(2,30)
// fee(3,20)
// fee(5,10)

// employes salary
function salary(basicSalary,totalAllowance,Deduction){
    console.log("grossSalary",basicSalary+totalAllowance,"netSalary",basicSalary+totalAllowance-Deduction)
}
salary((Number(prompt("basic salary:"))),(Number(prompt("total allowance:"))),(Number(prompt("deduction:"))))