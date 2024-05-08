function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.number = pages;
  this.read = read;
}

Book.prototype.info = function()  {
  var readstr = this.read ? "finished" : "not read yet";
  var pagesstr = this.number == 1 ? "1 page" : this.number + " pages";
  return `${this.title} by ${this.author}, ${pagesstr}, ${readstr}`
}

Book.prototype.changeRead = function()  {
  this.read = !(this.read);
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
  myLibrary.push(b);
  displayBooks();
}


function displayBooks() {
  const library = document.getElementById("library");
  for (var b of myLibrary)  {
    const len = "" + window.innerWidth/5 + "px";

    const book = document.createElement("div");
    book.textContent = b.info();
    book.style.width = len;
    book.style.height = '100px';
    book.style.color = "red";
    book.style.border = '1px solid black';
    book.style.margin = '0px';
    book.style.padding = '0px';
    book.style.flex = 1;
    book.style.textAlign = 'center';
    const but = document.createElement("button");
    but.textContent = "Change Status"
    but.onclick = () => {
      b.changeRead();
      book.textContent = b.info();
    }

    const remove = document.createElement("button");
    remove.textContent = "Remove this book";
    remove.onclick = () => {
      const index = myLibrary.indexOf(b);
      myLibrary.splice(index, index);
      // displayBooks();
    }

    book.append(but);
    book.append(remove);
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