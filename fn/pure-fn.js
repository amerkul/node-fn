const calculateDiscountedPrice = (products, discount) => {
    if (typeof(discount) !== "number" || isNaN(discount)) {
        throw Error("Invalid discount")
    }
    if (typeof(products) !== "object" || !Array.isArray(products)) {
        throw Error("Invalid products")
    }
    const copy = products.map(p => ({...p}))
    for (let product of copy) {
        product.price *= (1 - discount / 100)
    }
    return copy
}

const calculateTotalPrice = products => {
    if (typeof(products) !== "object" || !Array.isArray(products)) {
        throw Error("Invalid products")
    }
    let sum = 0
    for (let product of products) {
        sum += product.price
    }
    return sum
}

export {calculateDiscountedPrice, calculateTotalPrice}