function isValidPassword(password){
    const lengthCheck = password.length >= 8 && password.length <= 12;
    const upperCheck = /[A-Z]/.test(password);
    const lowerCheck = /[a-z]/.test(password);
    const digitCheck = /\d/.test(password);

    return lengthCheck && upperCheck && lowerCheck && digitCheck;
}

module.exports = isValidPassword;