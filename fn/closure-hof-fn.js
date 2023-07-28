const createCounter = () =>{
    let count = 0
    return () => ++count
}

const repeatFunction = (fn, number) => {
    if (typeof(fn) !== "function") {
        throw Error("Invalid function")
    }
    if (typeof(number) !== "number" || isNaN(number)) {
        throw Error("Invalid number")
    }
    return () => {
        let i = 0
        while (i != number) {
            console.log(fn())
            ++i
        }
    }
}

export {createCounter, repeatFunction}