function cashRegister(cart) {
    sum = 0;
    Object.keys(cart).forEach(element => {
        sum += Number.parseFloat(cart[element]);
    });
    return sum;
}

// Input
var cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };
  
  // Output
console.log(cashRegister(cartForParty)); // 60.55
