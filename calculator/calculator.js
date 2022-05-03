function squareNumber(num) {
    const sqr = num ** 2;
    console.log("The result of squaring the number " + num + " is " + sqr + ".");
    return sqr;
}

function halfNumber(num) {
    const half = num / 2;
    console.log("Half of " + num + " is " + half + ".");
    return half;
}

function percentOf(num1, num2) {
    const percents = num2 / num1 * 100 + "%"
    console.log(num1 + " is " + percents + " of " + num2 + ".");
    return percents;
}

function areaOfCircle(radius) {
    const area = (Math.PI * radius ** 2).toFixed(2);
    console.log("The area for a circle with radius " + radius + " is " + area + ".");
    return area;
}

function doWork(num) {
    const half = halfNumber(num);
    const sqr = squareNumber(half);
    const area = areaOfCircle(sqr);
    const res = percentOf(area, sqr);
    return res;
}

doWork(3);
