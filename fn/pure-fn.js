const calculateDiscountedPrice = (products, discount) => {
    const copy = products.map(p => ({...p}))
    for (let product of copy) {
        product.price *= (1 - discount / 100)
    }
    return copy
}

const calculateTotalPrice = products => {
    let sum = 0
    for (let product of products) {
        sum += product.price
    }
    return sum
}

export {calculateDiscountedPrice, calculateTotalPrice}