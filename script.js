const bookContainer = document.getElementById("bookContainer");
const addBookBtn = document.getElementById("addBookBtn");
const lightbox = document.getElementById("lightbox");
const closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submitBtn");

let myLibrary = [];
let title = document.getElementById("bookTitle");
let author = document.getElementById("bookAuthor");
let pages = document.getElementById("bookPages");
let bookStatusEls = document.getElementsByName("bookStatus");
let bookCount = 0;

//constructor
function Book(title, author, pages, bookStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.bookStatus = bookStatus;
}

addBookBtn.onclick = () => {
  lightbox.className = "on";
}

closeBtn.onclick = function() {
  lightbox.className = "off";
}

submitBtn.onclick = (event) => {
  let bookStatus;
  for (let i = 0; i < bookStatusEls.length; i++){
    if (bookStatusEls[i].checked){
      bookStatus = bookStatusEls[i].value;
      break;
    }
  }
  addBookToLibrary(title.value, author.value, pages.value, bookStatus, event);
  lightbox.className = "off";
}

function addBookToLibrary(title, author, pages, bookStatus, event) {
  event.preventDefault(); //removes the check if input filled requirement for the form

  const bookObject = new Book(title, author, pages, bookStatus);
  const book = document.createElement("div");
  const removeBookBtn = document.createElement("button");
  bookCount += 1;

    Book.prototype.toString = function bookTitleToString() {
    return "Title: " + this.title + "\n\n" + "Author: " + this.author + "\n\n" + "Pages: " + this.pages + "\n\n" + "Status: " + this.bookStatus;
  };
  
  myLibrary.push(bookObject);

  book.classList.add("book");
  removeBookBtn.classList.add("removeBookBtn");
  removeBookBtn.innerText = "Delete";

  book.id = "book" + bookCount;
  removeBookBtn.id = "remove" + book.id;

  removeBookBtn.onclick = () => {
    removeFromMyLibrary(book);
    bookContainer.removeChild(book);
  }

  book.innerText = bookObject.toString();

  bookContainer.appendChild(book);
  book.appendChild(removeBookBtn);
}

function removeFromMyLibrary(book) {
  const bookElements = document.querySelectorAll(".book");
  for (let i = 0; i < myLibrary.length; i++) {
    if (bookElements[i].id === book.id) {
      for (let j = i; j < myLibrary.length; j++) {
        myLibrary[j] = myLibrary[j + 1];
      }
      myLibrary.length = myLibrary.length - 1;
      break;
    }
  }
}