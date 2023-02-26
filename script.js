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
  addBookToLibrary(title.value, author.value, pages.value, event);
  lightbox.className = "off";
}

//submitBtn.addEventListener("click", addBookToLibrary);

function addBookToLibrary(title, author, pages, event) {
  event.preventDefault();
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  Book.prototype.toString = function bookTitleToString() {
    return `${this.title}`;
  };
  let newBookBtn = document.createElement("div");
  let newBookBtnClose = document.createElement("button");
  newBookBtn.appendChild(newBookBtnClose);
  newBookBtnClose.id = "newBookBtnClose";
  newBookBtn.id = "book" + myLibrary.length;
  newBookBtn.innerText = newBook.toString();
  bookContainer.appendChild(newBookBtn);
}