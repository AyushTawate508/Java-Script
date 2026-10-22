let fruits=['apple','banana','mango','pineapple','chicku']
console.log(fruits[2
])
console.log(fruits.length)
console.log(fruits[fruits.length-3])
let num=[1,2,3,4,5,6,7]
console.log(num)
let mix=['Ayush',24,true]
console.log(mix)
console.log(mix.length)
// console.log(typeof mix)

fruits[2]='orange'
console.log(fruits)
fruits.push('mango')
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.unshift('mango')
console.log(fruits)
fruits.shift()
console.log(fruits)
console.log(fruits.slice(1,4))
console.log(fruits.splice(1,1))
for (let i=0;i<=4;i++){
    console.log(fruits)
}
for (fruit of fruits){
    console.log(fruit)
}