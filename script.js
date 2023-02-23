const bookContainer = document.getElementById("bookContainer");
const addBookBtn = document.getElementById("addBookBtn");

let myLibrary = [];

//constructor
function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

addBookBtn.onclick = function () {
    addBookToLibrary();
}

function addBookToLibrary () {
    const newBook = new Book();
    myLibrary.push(newBook);

    let newBookBtn = document.createElement("button");
    newBookBtn.id = "book" + myLibrary.length;
    bookContainer.appendChild(newBookBtn);
}