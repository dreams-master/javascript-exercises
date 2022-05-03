function validateCreditCard(num) {
    // length is 18
    if (num.length !== 16) {
        return false;
    }

    // only ints
    for (let i = 0; i < 16; i++) {
        if (!Number.isInteger(Number.parseInt(num.charAt(i)))) {
            return false;
        }
    }

    // multiple digits
    let digits = {};
    for(let i = 0; i < 16; i++) {
        digits[num.charAt(i)] = true;
    }
    if (Object.keys(digits).length <= 1) {
        return false;
    }

    // last digit even
    if (Number.parseInt(num.charAt(15))%2 !== 0) {
        return false;
    }

    // sum > 16
    let sum = 0;
    for (let i = 0; i < 16; i++) {
        sum += Number.parseInt(num.charAt(i));
    }
    if (sum < 16) {
        return false;
    }

    return true;
}

console.log(validateCreditCard('9999777788880000'));
console.log(validateCreditCard('6666666666661666'));
console.log(validateCreditCard('a92332119c011112'));
console.log(validateCreditCard('4444444444444444'));
console.log(validateCreditCard('1211111111111112'));
