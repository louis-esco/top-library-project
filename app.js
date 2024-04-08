const myLibrary = [];
const tbody = document.querySelector('.books-table tbody');
const addBookBtn = document.querySelector('.addBook');
const modal = document.querySelector('dialog');
const closeModalBtn = document.querySelector('.closeModal')
const submitFormBtn = document.querySelector('.submitForm');

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
    displayBooks();
}

function displayBooks() {
    tbody.replaceChildren();

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

addBookBtn.addEventListener('click', () => {
    modal.showModal();
})

closeModalBtn.addEventListener("click", () => {
    modal.close();
})

submitFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const releaseYear = document.querySelector('#releaseYear').value;

    addBookToLibrary(title, author, pages, releaseYear);
    modal.close();
})