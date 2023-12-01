let myLibrary = [];

function Book(titre, auteur, pages, read) {
  this.titre = titre;
  this.auteur = auteur;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  let libraryEL = document.querySelector(".library");
  libraryEL.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEL = document.createElement("div");
    bookEL.setAttribute("class", "book-card");
    bookEL.innerHTML = `
        <div class="card-hearder">
          <h3 class="titre">${book.titre}</h3>
          <h5 class="auteur">by <span>${book.auteur}<span/></h5>
        </div>
        <div class="card-body">
          <p>${book.pages} pages</p>
          <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
          <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
        </div>
    `;

    libraryEL.appendChild(bookEL);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  let titre = document.querySelector("#titre").value;
  let auteur = document.querySelector("#auteur").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;
  let newBook = new Book(titre, auteur, pages, read);
  myLibrary.push(newBook);
  render();
}

let newBookBtn = document.querySelector("#newBookBtn");
newBookBtn.addEventListener("click", function () {
  let newwBookForm = document.querySelector("#newBookForm");
  console.log(newwBookForm);
  newwBookForm.style.display = "flex";
});

document
  .querySelector("#newBookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });
