function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.number = pages;
  this.read = read;
}

Book.prototype.info = function()  {
  var readstr = this.read ? "read" : "not read yet";
  return `${this.title} by ${this.author}, ${this.number} pages, ${readstr}`
}
const myLibrary = [];

function addBookToLibrary() {
  const library = document.getElementById("library");
  library.textContent = "";

  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;
  

  const b = new Book(title, author, pages, read == "y" ? true : false);
  library.textContent = read;
  myLibrary.push(b);

  displayBooks();
}


function displayBooks() {
  library.textContent = "he";

  const len = "" + window.width/5 + "px";
  for (const b in myLibrary)  {
    const book = document.createElement("div");
    // book.textContent = b.info();
    book.textContent = "ayudame";
    book.style.width = len;
    book.style.backgroundColor = "red";
    book.style.flex = 1;
    library.appendChild(book);
  }
}

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(theHobbit.info());

// function test() {
//   const con = document.getElementById("container");
//   document.getElementById("demo").textContent = "3423";
//   con.textContent = "";

//   const div = document.createElement("div");
//   div.style.color = "red";
//   div.style.backgroundColor = "white";
//   div.textContent = "he";
//   con.appendChild(div);
// }