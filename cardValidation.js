function isValidQuantity(quantity) {
    return Number.isInteger(quantity) && quantity > 0;
}

module.exports = isValidQuantity;