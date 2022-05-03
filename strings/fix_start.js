function fixStart(str) {
    let char = str.charAt(0);
    let reminder = str.substring(1);
    let res = char + reminder.replace(new RegExp(char, 'g'), '*');
    console.log("fixStart('" + str + "'): '" + res + "'");
}

fixStart("babble");
