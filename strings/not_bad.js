function notBad(str) {
    let notIndex = str.indexOf("not");
    let badIndex = str.indexOf("bad");
    let res;
    if (notIndex === -1 || badIndex === -1 || notIndex > badIndex) {
        res = str;
    } else {
        res = str.slice(0, notIndex) + "good" + str.slice(badIndex + 3);
    }
    console.log("notBad('" + str + "'): '" + res + "'");
}

notBad("This dinner is not that bad!");
notBad("This movie is not so bad!");
notBad("This dinner is bad!");
