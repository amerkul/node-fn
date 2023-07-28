const calculateFactorial = bigNumber => {
    function cal(bigNumber, result) {
        return bigNumber === 0n ? result : cal(bigNumber - 1n, bigNumber * result)
    }
    return cal(bigNumber, 1n)
}

const power = (base, exponent) => {
    function cal(base, exponent, result) {
        return exponent === 0n ? result : cal(base, exponent - 1n, result * base)
    }
    return cal(base, exponent, 1n)
}

export {calculateFactorial, power}