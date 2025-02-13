const calculateDiscount = require('./discountCalculation')

test('Member and spending > $100 15% discount', () => {
    expect(calculateDiscount(true, 150)).toBe(15);
});

test('Member but spending < $100 get 10% discount', () => {
    expect(calculateDiscount(true, 80)).toBe(10);
});

test('Non-member but spending > $100 get 5% discount', () => {
    expect(calculateDiscount(false, 120)).toBe(5);
});

test('Non-member and spending < $100 no get discount', () => {
    expect(calculateDiscount(false, 50)).toBe(0);
});