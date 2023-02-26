const bookContainer = document.getElementById("bookContainer");
const addBookBtn = document.getElementById("addBookBtn");
const lightbox = document.getElementById("lightbox");
const closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submitBtn");

let myLibrary = [];
let title = document.getElementById("bookTitle");
let author = document.getElementById("bookAuthor");
let pages = document.getElementById("bookPages")

//constructor
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

addBookBtn.onclick = () => {
  lightbox.className = "on";
}

closeBtn.onclick = function() {
  lightbox.className = "off";
}

submitBtn.onclick = (event) => {
  addBookToLibrary(title.innerText, author.innerText, pages.innerText, event);
  lightbox.className = "off";
}

//submitBtn.addEventListener("click", addBookToLibrary);

function addBookToLibrary(title, author, pages, event) {
  event.preventDefault();
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  Book.prototype.toString = function bookToString() {
    return `${this.bookTitle}`;
    return `${this.bookAuthor}`;
    return `${this.bookPages}`;
  };
  let newBookBtn = document.createElement("button");
  newBookBtn.id = "book" + myLibrary.length;
  newBookBtn.innerText = newBook.prototype.toString();
  bookContainer.appendChild(newBookBtn);
}