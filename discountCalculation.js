function calculateDiscount(is_member, spent_amount) {
    if (is_member && spent_amount > 100) {
        return 15;
    }

    if (is_member) {
        return 10;
    }

    if (spent_amount > 100) {
        return 5;
    }

    return 0;
}

module.exports = calculateDiscount;