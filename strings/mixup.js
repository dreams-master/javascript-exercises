function mixUp(str1, str2) {
    let mix1 = str2.substring(0,2) + str1.substring(2);
    let mix2 = str1.substring(0,2) + str2.substring(2);
    console.log("mixUp('" + str1 + "', " + str2 + "'): '" + mix1 + " " + mix2 + "'");
}

mixUp("mix", "pod");
mixUp("dog", "dinner");
