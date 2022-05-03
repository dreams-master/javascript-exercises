const books = [
    {
        title: "Ender",
        author: "Orson Scott Card",
        alreadyRead: true
    },
    {
        title: "Sommer Night Dream",
        author: "Shakespeare",
        alreadyRead: false
    }
];

for (let i = 0; i < books.length; i++) {
    let book = '"' + books[i].title + '" by ' + books[i].author;
    if (books[i].alreadyRead) {
        console.log("You already read " + book);
    } else {
        console.log("You still need to read " + book);
    }
}
