//variables

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

//functions

function addBookToLibrary(title, author, pages, bookStatus, event) { // adds the book element to the container with all the information, then resets the form
  event.preventDefault(); //prevents form from sending to a server

  const bookObject = new Book(title, author, pages, bookStatus);
  const book = document.createElement("div");
  const removeBookBtn = document.createElement("button");
  const statusContainer = document.createElement("div");
  const formOptionEls = document.getElementsByName("bookStatus");
  const option1 = document.createElement("input");
  const option2 = document.createElement("input");
  const option3 = document.createElement("input");
  const label1 = document.createElement("label");
  const label2 = document.createElement("label");
  const label3 = document.createElement("label");
  bookCount += 1;

  statusContainer.classList.add("statusContainer");

  const optionName = bookObject.title + "status";

  label1.innerText = "Not Started";
  option1.type = "radio";
  option1.name = optionName;
  option1.value = "Not Started";

  label2.innerText = "Still Reading";
  option2.type = "radio";
  option2.name = optionName;
  option2.value = "Still Reading";

  label3.innerText = "Finished";
  option3.type = "radio";
  option3.name = optionName;
  option3.value = "Finished";

  statusContainer.appendChild(label1);
  statusContainer.appendChild(option1);
  statusContainer.appendChild(label2);
  statusContainer.appendChild(option2);
  statusContainer.appendChild(label3);
  statusContainer.appendChild(option3);

  Book.prototype.toString = function bookTitleToString() {
    return "Title: " + this.title + "\n\n" + "Author: " + this.author + "\n\n" + "Pages: " + this.pages + "\n\n";
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
  book.appendChild(statusContainer);
  book.appendChild(removeBookBtn);

  const optionEls = document.getElementsByName(optionName);
  for (let i = 0; i < optionEls.length; i++) {
    if (optionEls[i].value === bookObject.bookStatus) {
      optionEls[i].checked = true;
    }
  }
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
  for (let i = 0; i < formOptionEls.length; i++) {
      formOptionEls[i].checked = false;
  }
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

//onclick button functions

addBookBtn.onclick = () => {
  lightbox.className = "on";
}

closeBtn.onclick = function() {
  lightbox.className = "off";
}

submitBtn.onclick = (event) => {
  let bookStatus;
  for (let i = 0; i < bookStatusEls.length; i++) {
    if (bookStatusEls[i].checked) {
      bookStatus = bookStatusEls[i].value;
      break;
    }
  }
  addBookToLibrary(title.value, author.value, pages.value, bookStatus, event);
  lightbox.className = "off";
}







