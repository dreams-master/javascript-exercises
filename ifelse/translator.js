function helloWorld(lang = "en") {
    if (lang === "de") {
        return "Hallo Welt";
    } else if (lang === "es") {
        return "Hola Mundo";
    } else {
        return "Hello World";
    }
}

console.log(helloWorld("en"));
console.log(helloWorld("de"));
console.log(helloWorld("es"));
