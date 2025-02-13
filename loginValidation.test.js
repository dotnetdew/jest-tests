const login = require('./loginValidation')

test('valid username and password', () => {
    expect(login('abdulloh', '20030508')).toBe(true);
});

test('invalid username and password', ()=> {
    expect(login('123', '123')).toBe(false);
})

test('invalid username', ()=> {
    expect(login('123', '20030508')).toBe(false);
})

test('invalid password', ()=> {
    expect(login('abdulloh', '123')).toBe(false);
})