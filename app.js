class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleReadStatus() {
        this.read = this.read === "yes" ? "no" : "yes";
    }
}

function addBookToLibrary(library, title, author, pages, read) {
    library.push(new Book(title, author, pages, read));
    displayBooks(library);
}

function displayBooks(library) {
    const tbody = document.querySelector('.books-table tbody');
    tbody.replaceChildren();
    createBooksTable();

    for (let [index, book] of library.entries()) {
        const newTr = document.createElement("tr");
        newTr.setAttribute('data-index', index);

        const title = document.createElement("td");
        title.textContent = book.title;
        const author = document.createElement("td");
        author.textContent = book.author;
        const pages = document.createElement("td");
        pages.textContent = book.pages;
        const read = document.createElement("td");
        const readStatus = document.createElement('div');
        readStatus.textContent = book.read;
        const readToggle = document.createElement("button");
        readToggle.textContent = "Change";
        readToggle.classList.add('toggleReadStatus');
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "⨯";
        deleteBtn.classList.add('removeBook');

        read.append(readStatus);
        read.append(readToggle);

        newTr.append(title);
        newTr.append(author);
        newTr.append(pages);
        newTr.append(read);
        newTr.append(deleteBtn);

        tbody.append(newTr);

        deleteBtn.addEventListener('click', () => {
            library.splice(newTr.dataset.index, 1);
            displayBooks(library);
        })

        readToggle.addEventListener('click', () => {
            library[index].toggleReadStatus();
            displayBooks(library);
        })
    }
}

function setupLibrary() {
    const myLibrary = [];
    const modal = document.querySelector('dialog');
    const addBookBtn = document.querySelector('.addBook');
    const bookForm = document.querySelector('.bookForm');
    const closeModalBtn = document.querySelector('.closeModal')
    const submitFormBtn = document.querySelector('.submitForm');

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

        addBookToLibrary(myLibrary, title, author, pages, read);
        bookForm.reset();
        modal.close();
    })
}

setupLibrary();