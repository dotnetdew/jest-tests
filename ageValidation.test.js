const isValidAge = require('./ageValidation')

test('minimum valid age', ()=> {
    expect(isValidAge(18)).toBe(true);
})

test('maximum valid age', ()=> {
    expect(isValidAge(60)).toBe(true);
})

test('invalid age below minimum', () => {
    expect(isValidAge(17)).toBe(false);
})

test('invalid age above maximum', ()=> {
    expect(isValidAge(61)).toBe(false);
})