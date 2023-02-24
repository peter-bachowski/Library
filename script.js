const bookContainer = document.getElementById("bookContainer");
const addBookBtn = document.getElementById("addBookBtn");
const lightbox = document.getElementById("lightbox");
const closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submitBtn");

let myLibrary = [];

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

submitBtn.onclick = (title, author, pages) => {
  addBookToLibrary(title, author, pages);
  lightbox.className = "off";
}

function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);

  let newBookBtn = document.createElement("button");
  newBookBtn.id = "book" + myLibrary.length;
  bookContainer.appendChild(newBookBtn);
}