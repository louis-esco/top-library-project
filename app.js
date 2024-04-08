const myLibrary = [];
const tbody = document.querySelector('.books-table tbody');

function Book(title, author, pages, releaseYear) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.releaseYear = releaseYear;
}

// function addBookToLibrary(title, author, pages, releaseYear) {
//     const newBook = new Book(title, author, pages, releaseYear);
//     myLibrary.push(newBook);
// }

function addBookToLibrary(title, author, pages, releaseYear) {
    myLibrary.push(new Book(title, author, pages, releaseYear));
}

function displayBooks() {
    for (let book of myLibrary) {
        const newTr = document.createElement("tr");
        const title = document.createElement("td");
        title.textContent = book.title;
        const author = document.createElement("td");
        author.textContent = book.author;
        const pages = document.createElement("td");
        pages.textContent = book.pages;
        const releaseYear = document.createElement("td");
        releaseYear.textContent = book.releaseYear;

        newTr.append(title);
        newTr.append(author);
        newTr.append(pages);
        newTr.append(releaseYear);

        tbody.append(newTr);
    }
}