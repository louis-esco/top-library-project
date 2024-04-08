const myLibrary = [];
const tbody = document.querySelector('.books-table tbody');
const modal = document.querySelector('dialog');
const addBookBtn = document.querySelector('.addBook');
const closeModalBtn = document.querySelector('.closeModal')
const submitFormBtn = document.querySelector('.submitForm');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
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
        const read = document.createElement("td");
        read.textContent = book.read;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove";
        deleteBtn.classList.add('removeBook');

        newTr.append(title);
        newTr.append(author);
        newTr.append(pages);
        newTr.append(read);
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
    const read = document.querySelector('#read').value;

    addBookToLibrary(title, author, pages, read);
    modal.close();
})