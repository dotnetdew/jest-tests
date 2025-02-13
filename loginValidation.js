function login(username, password) {
    const validUsername = username === "abdulloh";
    const validPassword = password === '20030508';

    if (!validUsername && !validPassword) {
        return false;
    }

    if (!validUsername) {
        return false;
    }

    if(!validPassword) {
        return false;
    }
    
    return true;
}

module.exports = login;