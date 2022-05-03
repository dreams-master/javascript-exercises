function verbing(str) {
    let res = str;
    if (str.length >= 3) {
        if (str.endsWith("ing")) {
            res += "ly";
        } else {
            res += "ing"
        }
    }
    console.log("verbing('" + str + "'): '" + res + "'");
}

verbing("swim");
verbing("swimming");
verbing("go");
