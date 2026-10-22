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

// // employes salary
// function salary(basicSalary,totalAllowance,Deduction){
//     console.log("grossSalary",basicSalary+totalAllowance,"netSalary",basicSalary+totalAllowance-Deduction)
// }
// salary((Number(prompt("basic salary:"))),(Number(prompt("total allowance:"))),(Number(prompt("deduction:"))))

// // loan eligibility
// function loan(age,salary,employment){
//     if(age>=18 && salary>=5000 && employment=="employed"){
//         console.log("Loan eligibility meets the given criteria")
//     }else{
//         console.log("Loan eligibility does not meets given criteria")
//     }
// }
// loan((Number(prompt("Age:"))),(Number(prompt("Salary:"))),(prompt("Employment:")))

// // Restaurent Bill
// function bills(){
//     let total=0
//     let discountLimit=Number(prompt("Enter discount limit:"))
//     const discountRate=10
//     let n=Number(prompt("Enter number of orders:"))
//     for(let i=1;i<=n;i++){
//         let price=Number(prompt("Enter price of item " + i + ":"))
//         let quantity=Number(prompt("Enter quantity of item " + i + ":"))
//         total+=price*quantity
//         console.log("Total Bill: Rs. " , total)
//     }
//     let discount=0
//     if (total >= discountLimit)
//     discount=total*discountRate/100
//     console.log("Discount: Rs. " , discount)

//     finalBilling=total-discount
//     console.log("Final Billing: Rs. " , finalBilling)      
// }
// bills()

// // Mobile Recharge system
// function mobile(rechargePlan,walletBalance){
//     if(rechargePlan<=walletBalance){
//         console.log("Payment validated, recharge confirmed")
//     }
//     else{
//         console.log("Payment invalide")
//     }
// }
// mobile((Number(prompt("Recharge Plan:"))),(Number(prompt("Wallet Balance:"))))

