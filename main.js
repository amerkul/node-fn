import { products } from "./domain/products.js"
import { calculateDiscountedPrice, calculateTotalPrice } from "./fn/pure-fn.js"
import { person } from "./domain/person.js"
import { getFullName, filterUniqueWords, getAverageGrade } from "./fn/composition-fn.js"
import { students } from "./domain/students.js"
import { createCounter, repeatFunction } from "./fn/closure-hof-fn.js"
import { calculateFactorial, power } from "./fn/recursion-fn.js"
import { lazyMap, fibonacciGenerator } from "./fn/lazy-fn.js"

console.log(calculateDiscountedPrice(products, 10))
console.log(products)
console.log(calculateTotalPrice(products))
console.log(products)
console.log(getFullName(person))
console.log(filterUniqueWords("Functions - are one, of the fundamental. are ; ? building blocks blocks in JavaScript."))
console.log(getAverageGrade(students))
console.log(students)
let counter = createCounter()
for (let i = 0; i < 10; i++) {
    console.log(counter())
}
repeatFunction(counter, 10)()
console.log(calculateFactorial(BigInt(5000)))
console.log(power(BigInt(2), BigInt(5000)))
const array = [1,2,3,4,5,6,]
const next = lazyMap(array, (a) => a * a)
for (let i = 0; i < 7; i++) {
    console.log(next())
    console.log(array)
}
const fibonacci = fibonacciGenerator()
for (let i = 0; i < 20; i++) {
    console.log(fibonacci())
}


