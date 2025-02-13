const isValidQuantity = require('./cardValidation')
const quantityCheck = require('./cardValidation')

test('valid positive quantity', () => {
    expect(isValidQuantity(1)).toBe(true);
})

test('valid positive quantity', () => {
    expect(isValidQuantity(5)).toBe(true);
})

test('valid positive quantity', () => {
    expect(isValidQuantity(10)).toBe(true);
})

test('invalid 0 quantity', () => {
    expect(isValidQuantity(0)).toBe(false);
})

test('invalid minus quantity', () => {
    expect(isValidQuantity(-1)).toBe(false);
})

test('invalid minus quantity', () => {
    expect(isValidQuantity(-5)).toBe(false);
})

test('invalid non-numeric quantity', () => {
    expect(isValidQuantity('abc')).toBe(false);
})

test('invalid non-numeric quantity', () => {
    expect(isValidQuantity('two')).toBe(false);
})