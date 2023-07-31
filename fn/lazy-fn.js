const lazyMap = (array, mapFn) => {
    if (typeof(array) !== "object" || !Array.isArray(array)) {
        throw Error("Invalid array")
    }
    if (typeof(mapFn) !== "function") {
        throw Error("Invalid function")
    }
    let copy = Array.from(array)
    let next = 0
    let last = array.length
    return () => {
        if (next < last) {
            let result = mapFn(copy[next])
            ++next
            return result
        }
    }
}

const fibonacciGenerator = (n) => {
    let arg1 = 0
    let arg2 = 1
    if (n === 1) {
        return arg1       
    }
    if (n === 2) {
        return arg2
    }
    for (let i = 0; i < n - 2; i++) {
        let next = arg1 + arg2
        arg1 = arg2
        arg2 = next
    }
    return arg2
}

const cachedFibonacciGenerator = (fibonacciGenerator) => {
    const cache = {}
    return function cacheFunc(n) {
        if (cache[n] === undefined) {
            cache[n] = fibonacciGenerator(n)
        }
        return cache[n]
    }
}

export {lazyMap, fibonacciGenerator, cachedFibonacciGenerator}