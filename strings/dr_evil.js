function evil(num) {
    let res = "DrEvil(" + num + "): " + num + " dollars";
    if (num === 1000000) {
        res += " (pinky)";
    }
    console.log(res);
}

evil(10);
evil(1000000);
