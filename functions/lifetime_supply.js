function calculateSupply(age, amount) {
    const maxAge = 100;
    console.log("You will need " + (amount * 365 * (maxAge - age)) + " to last you until the ripe old age of " + maxAge + ".");
}

calculateSupply(16, 2);
calculateSupply(30, 1.5);
calculateSupply(50, 1);
