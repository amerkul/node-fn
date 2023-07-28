const lazyMap = (array, mapFn) => {
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

const fibonacciGenerator = () => {
    let arg1 = 0
    let arg2 = 1
    let i = 0
    return () => {
        if (i === 0) {
            ++i
            return arg1
        }
        if (i === 1) {
            ++i
            return arg2
        }
        let next = arg1 + arg2
        arg1 = arg2
        arg2 = next
        return next
    }
}

export {lazyMap, fibonacciGenerator}