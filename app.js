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

    for (let [index, book] of myLibrary.entries()) {
        const newTr = document.createElement("tr");
        newTr.setAttribute('data-index', index);

        const title = document.createElement("td");
        title.textContent = book.title;
        const author = document.createElement("td");
        author.textContent = book.author;
        const pages = document.createElement("td");
        pages.textContent = book.pages;
        const releaseYear = document.createElement("td");
        releaseYear.textContent = book.releaseYear;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove";
        deleteBtn.classList.add('removeBook');

        newTr.append(title);
        newTr.append(author);
        newTr.append(pages);
        newTr.append(releaseYear);
        newTr.append(deleteBtn);

        tbody.append(newTr);

        deleteBtn.addEventListener('click', () => {
            myLibrary.splice(newTr.dataset.index, 1);
            displayBooks();
        })
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