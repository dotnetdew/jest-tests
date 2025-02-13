function isValidAge(age) {
    return age >= 18 && age <= 60;
}

console.log(isValidAge(18));

module.exports = isValidAge;