// Variables
const addBook = document.querySelector("#add");
let library = [];

// Event Listeners
addBook.addEventListener("click", render);
document.addEventListener("click", deleteBook);


// Constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// Prototypes
Book.prototype.toggleIsRead = function() {
    if (this.isRead == "Read") {
        this.isRead = "Not read";
    } else {
        this.isRead = "Read";
    }
}

function deleteBook(event) {
   // if (event.target.id == "remove") {
     //   library.filter(book => {
       //     return book;
    //    });
    //}
    //function deleteBook(title) {
      //  let i = books.findIndex(b => b.title == title);
        //books.splice(i, 1);
      //}
      if (event.target.id == "remove") {
        const table = document.querySelector('table');
        const tr = event.target.parentNode.parentNode;
        table.removeChild(tr);
    }
}

// Functions
function addBookToLibrary() {
    let authorOfBook = document.querySelector("#author").value;
    let bookTitle = document.querySelector("#book-title").value;
    let numberOfPages = document.querySelector("#pages").value;
    let status = document.querySelector("#isRead").value;
    let newBook = new Book(bookTitle, authorOfBook, numberOfPages, status);

    library.push(newBook);

    return newBook;
}

function updateStatus() {

}

function emptyInputs() {
    const inputs = Array.from(document.querySelectorAll("input"));
    inputs.forEach(input => input.value = "");
}

function render() {
    addBookToLibrary();
    emptyInputs();

    let newBook = library[library.length - 1];
    let table = document.querySelector("table");
    let createTr = document.createElement("tr");

    table.appendChild(createTr);
    createTr.innerHTML = `<td>${newBook.title}</td>
                        <td>${newBook.author}</td>
                        <td>${newBook.pages}</td>
                        <td><button class="table-buttons" id="not-read">${newBook.isRead}</button></td>
                        <td><button class="table-buttons" id="remove">Delete</button></td>`;
}
