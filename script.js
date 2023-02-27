const bookContainer = document.getElementById("bookContainer");
const addBookBtn = document.getElementById("addBookBtn");
const lightbox = document.getElementById("lightbox");
const closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submitBtn");

let myLibrary = [];
let title = document.getElementById("bookTitle");
let author = document.getElementById("bookAuthor");
let pages = document.getElementById("bookPages");
let bookCount = 0;

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

  event.preventDefault(); //removes the check if input filled requirement for the form
  bookCount += 1;
  const bookObject = new Book(title, author, pages);
  myLibrary.push(bookObject);

  const book = document.createElement("div");
  const removeBookBtn = document.createElement("button");

  Book.prototype.toString = function bookTitleToString() {
    return this.title + "\n\n" + this.author + "\n\n" + this.pages + " pages";
  };

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

function removeFromMyLibrary (book) {
  const bookElements = document.querySelectorAll(".book");
  for (let i = 0; i < myLibrary.length; i++){
    if(bookElements[i].id === book.id){
      for (let j = i; j < myLibrary.length; j++){
        myLibrary[j] = myLibrary[j + 1];
      }
      myLibrary.length = myLibrary.length - 1;
      break;
    }
  }
}