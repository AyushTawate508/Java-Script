const prompt = require('prompt-sync')()
// using function
let usdRate = 0.012;
let eurRate = 0.011;
let gbpRate = 0.0095;
let aedrate = 0.044;
let cnyRate = 0.070;
let rubRate = 0.875;
let brlRate = 0.053;
let zarRate = 0.174;
let chfRate = 0.009;
let audRate = 0.015; 
let cadRate = 0.015;

function usd(inr){
return inr * usdRate
}
function eur(inr){
return inr * eurRate
}
function gbp(inr){
return inr * gbpRate
}
function aed(inr){
return inr * aedRate
}
function cny(inr){
return inr * cnyRate
}
function rub(inr){
return inr * rubRate
}
function brl(inr){
return inr * brlRate
}
function zar(inr){
return inr * zarRate
}
function chf(inr){
return inr * chfRate
}
function aud(inr){
return inr * audRate
}
function cad(inr){
return inr * cadRate
}

let inr = (Number(prompt("Enter amount in INR:")))

console.log(
    "1: USD 2: EUR 3: GBP 4: AED 5: CNY " +
    "6: RUB 7: BRL 8: ZAR 9: CHF 10: AUD 11: CAD"
)

let currency = prompt("PLEASE CHOSE AN CURRENCY (1-11):")

let result=0

if (currency === "1") {
    result = usd(inr)
    console.log("After converting amount in USD: $",result)
} else if (currency === "2") {
    result = eur(inr)
    console.log("After converting amount in EUR: €",result)
} else if (currency === "3") {
    result = gbp(inr)
    console.log("After converting amount in GBP: £",result)
} else if (currency === "4") {
    result = aed(inr)
    console.log("After converting amount in AED: د.إ",result)
} else if (currency === "5") {
    result = cny(inr)
    console.log("After converting amount in CNY: ¥",result)
} else if (currency === "6") {
    result = rub(inr)
    console.log("After converting amount in RUB: ₽",result)
} else if (currency === "7") {
    result = brl(inr)
    console.log("After converting amount in BRL: R$",result)
} else if (currency === "8") {
    result = zar(inr)
    console.log("After converting amount in ZAR: R",result)
} else if (currency === "9") {
    result = chf(inr)
    console.log("After converting amount in CHF: CHF",result)
} else if (currency === "10") {
    result = aud(inr)
    console.log("After converting amount in AUD: A$",result)
} else if (currency === "11") {
    result = cad(inr)
    console.log("After converting amount in CAD: CA$",result)
} else {
    console.log("Invalid currency")
}