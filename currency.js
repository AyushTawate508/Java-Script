const prompt = require('prompt-sync')()

// convert Indian currency inr into usd ,eur ,gbp ,aed
let usd = 0.012;
let eur = 0.011;
let gbp = 0.0095;
let aed = 0.044;
let cny = 0.070;
let rub = 0.875;
let brl = 0.053;
let zar = 0.174;
let chf = 0.009;
let aud = 0.015; 
let cad = 0.015;

let inr = (Number(prompt("Enter amount in INR:")))

let currency = prompt("PLEASE CHOSE AN CURRENCY (1-11):")
let convertedAmount=0

if (currency === "1") {
    convertedAmount = inr * usd
    console.log("After converting amount in USD: $",convertedAmount)
} else if (currency === "2") {
    convertedAmount = inr * eur
    console.log("After converting amount in EUR: €",convertedAmount)
} else if (currency === "3") {
    convertedAmount = inr * gbp
    console.log("After converting amount in GBP: £",convertedAmount)
} else if (currency === "4") {
    convertedAmount = inr * aed
    console.log("After converting amount in AED: د.إ",convertedAmount)
} else if (currency === "5") {
    convertedAmount = inr * cny
    console.log("After converting amount in CNY: ¥",convertedAmount)
} else if (currency === "6") {
    convertedAmount = inr * rub
    console.log("After converting amount in RUB: ₽",convertedAmount)
} else if (currency === "7") {
    convertedAmount = inr * brl
    console.log("After converting amount in BRL: R$",convertedAmount)
} else if (currency === "8") {
    convertedAmount = inr * zar
    console.log("After converting amount in ZAR: R",convertedAmount)
} else if (currency === "9") {
    convertedAmount = inr * chf
    console.log("After converting amount in CHF: CHF",convertedAmount)
} else if (currency === "10") {
    convertedAmount = inr * aud
    console.log("After converting amount in AUD: A$",convertedAmount)
} else if (currency === "11") {
    convertedAmount = inr * cad
    console.log("After converting amount in CAD: CA$",convertedAmount)
} else {
    console.log("Invalid currency")
}

