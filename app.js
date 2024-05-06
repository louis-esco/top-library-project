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
  const tbody = document.querySelector(".books-table tbody");
  tbody.replaceChildren();

  for (let [index, book] of library.entries()) {
    const newTr = document.createElement("tr");
    newTr.setAttribute("data-index", index);

    const title = document.createElement("td");
    title.textContent = book.title;
    const author = document.createElement("td");
    author.textContent = book.author;
    const pages = document.createElement("td");
    pages.textContent = book.pages;
    const read = document.createElement("td");
    const readStatus = document.createElement("div");
    readStatus.textContent = book.read;
    const readToggle = document.createElement("button");
    readToggle.textContent = "Change";
    readToggle.classList.add("toggleReadStatus");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "⨯";
    deleteBtn.classList.add("removeBook");

    read.append(readStatus);
    read.append(readToggle);

    newTr.append(title);
    newTr.append(author);
    newTr.append(pages);
    newTr.append(read);
    newTr.append(deleteBtn);

    tbody.append(newTr);

    deleteBtn.addEventListener("click", () => {
      library.splice(newTr.dataset.index, 1);
      displayBooks(library);
    });

    readToggle.addEventListener("click", () => {
      library[index].toggleReadStatus();
      displayBooks(library);
    });
  }
}

function setupLibrary() {
  const myLibrary = [];
  const modal = document.querySelector("dialog");
  const addBookBtn = document.querySelector(".addBook");
  const bookForm = document.querySelector(".bookForm");
  const closeModalBtn = document.querySelector(".closeModal");
  const submitFormBtn = document.querySelector(".submitForm");
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");

  addBookBtn.addEventListener("click", () => {
    modal.showModal();
  });

  closeModalBtn.addEventListener("click", () => {
    modal.close();
    bookForm.reset();
  });

  function submitForm() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;

    addBookToLibrary(myLibrary, title, author, pages, read);
    bookForm.reset();
    modal.close();
  }

  titleInput.addEventListener("invalid", () => {
    if (titleInput.validity.valueMissing) {
      titleInput.setCustomValidity("Please enter a title");
    }
  });

  titleInput.addEventListener("input", () => {
    titleInput.setCustomValidity("");
  });

  authorInput.addEventListener("input", () => {
    if (authorInput.validity.valueMissing) {
      authorInput.setCustomValidity("Please enter an author name");
    } else {
      authorInput.setCustomValidity("");
    }
  });

  authorInput.addEventListener("invalid", () => {
    if (authorInput.validity.valueMissing) {
      authorInput.setCustomValidity("Please enter an author name");
    } else {
      authorInput.setCustomValidity("");
    }
  });

  pagesInput.addEventListener("input", () => {
    if (pagesInput.validity.valueMissing) {
      pagesInput.setCustomValidity("Please enter a number of pages");
    } else {
      pagesInput.setCustomValidity("");
    }
  });

  pagesInput.addEventListener("invalid", () => {
    if (pagesInput.validity.valueMissing) {
      pagesInput.setCustomValidity("Please enter a number of pages");
    } else {
      pagesInput.setCustomValidity("");
    }
  });

  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitForm();
  });

  console.log(titleInput);
}

setupLibrary();
