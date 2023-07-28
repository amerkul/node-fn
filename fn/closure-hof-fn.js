const createCounter = () =>{
    let count = 0
    return () => ++count
}

const repeatFunction = (fn, number) => {
    return () => {
        let i = 0
        while (i != number) {
            console.log(fn())
            ++i
        }
    }
}

export {createCounter, repeatFunction}