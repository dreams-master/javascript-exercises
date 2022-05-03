function pluralize(noun, num) {
    if (num === 1) {
        return "" + num + " " + noun;
    } else {
        return "" + num + " " + noun + "s";
    }
}

console.log(pluralize("cat", 5));
console.log(pluralize("dog", 1));
console.log(pluralize("sheep", -5));
console.log(pluralize("geese", 0));
