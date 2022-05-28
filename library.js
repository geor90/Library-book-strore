const addBook = document.querySelector("#add");
//const remove = document.querySelector("add");
let myLibrary = [];
//Event Listeners
addBook.addEventListener("click", render);
//document.addEventListener("click", deleteBook) ; 

function Book (name, author, pages, read) {
    this.name= name ;
    this.author=author;
    this.pages=pages;
    this.read= read;

}

//function addBookToLibrary(){
    //let addition = function Book(){

    //}
    //return myLibrary.push(addition);
//}

function addBookToLibrary() {
    let authorOfBook = document.querySelector("#author").value;
    let bookTitle = document.querySelector("#book-title").value;
    let numberOfPages = document.querySelector("#pages").value;
    let status = document.querySelector("#isRead").value;
    let newBook = new Book(bookTitle, authorOfBook, numberOfPages, status);
    
   
    myLibrary.push(newBook);

    
}


function render(){
    addBookToLibrary();
    let table= document.querySelector("table");
    let tr = document.createElement("tr");


    table.appendChild(tr);

    let new_book = myLibrary[myLibrary.length - 1];
    tr.innerHTML = `<td>${new_book.name}</td>
                    <td>${new_book.author}</td>
                    <td>${new_book.pages}</td>

                    <td><button class="table-buttons" id="not-read"> Not Read</button></td>
                <td><button class="table-buttons" id="remove">Delete</button></td>`;
        
}



