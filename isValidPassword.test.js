const isValidPassword = require('./isValidPassword')

test('valid password', () => {
    expect(isValidPassword('Dfg456789')).toBe(true);
});

test('short password', ()=> {
    expect(isValidPassword('123')).toBe(false);
});

test('long password', () => {
    expect(isValidPassword('123456789101112123')).toBe(false);
});

test('missing uppercase letter', () => {
    expect(isValidPassword('vfd12345')).toBe(false);
});

test('missing lowercase letter', () => {
    expect(isValidPassword('ASD12345')).toBe(false);
});

test('missing digit', () => {
    expect(isValidPassword('abcdeFGHIJ')).toBe(false);
});