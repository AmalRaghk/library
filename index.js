const cards = document.querySelector('.cards');
const addbtn = document.querySelector('#addbtn');
const bookDial = document.querySelector('#bookDial');
const title = document.querySelector('#title');
const Author = document.querySelector('#Author');
const Pagenos = document.querySelector('#Pagenos');
const Read = document.querySelector('select[name="Read"]');

let myLibrary = [];

function addBookToLibrary(title, author, pagenos, read) {
  const book = {
    Id: myLibrary.length,
    Title: title,
    Author: author,
    Pagenos: pagenos,
    Read: read,
  };
  myLibrary.push(book);
  createCard(book);
}

function createCard(book) {
  const card = document.createElement("div");
  card.setAttribute('class', "card");
  card.setAttribute('id', `card${book.Id}`);
  card.innerHTML = `
    <div class="deck">
    <div><img src="./img/book.svg"></div>
      <div class="title">${book.Title}</div>
      <div class="author">${book.Author}</div>
      <div classs="pageNo">${book.Pagenos}</div>
      <div class="Read" data-read-display>${book.Read}</div>  
      <button id="deleteBtn">Delete</button>
      <button id="readBtn">Read</button>
    </div>
  `;
  cards.appendChild(card);
  handleCardButtonClicks(card);
}

function handleCardButtonClicks(card) {
  const bookId = parseInt(card.id.replace('card', ''));

  const deleteBtn = card.querySelector('#deleteBtn');
  deleteBtn.addEventListener("click", () => {
    removeBook(bookId);
  });

  const readBtn = card.querySelector('#readBtn');
  readBtn.addEventListener("click", () => {
    markBookAsRead(bookId);
  });
}

function removeBook(bookId) {
  myLibrary = myLibrary.filter(book => book.Id !== bookId);
  const cardToRemove = document.querySelector(`#card${bookId}`);
  if (cardToRemove) {
    cardToRemove.remove();
    console.log("Card removed successfully");
  } else {
    console.error("Card with ID not found");
  }
}

function markBookAsRead(bookId) {
  const book = myLibrary[myLibrary.findIndex(book => book.Id === bookId)];
  book.Read = book.Read === "Yes" ? "No" : "Yes";  // Toggle "Read" value
  const card = document.querySelector(`#card${bookId}`);
  const readDisplay = card.querySelector('div[data-read-display]');
  readDisplay.textContent = book.Read;  // Update displayed value
}

bookDial.addEventListener("close", (e) => {
  console.log(bookDial.returnValue === "default" ? "No return value." : `ReturnValue: ${bookDial.returnValue}.`);
});

addbtn.addEventListener("click", (event) => {
  event.preventDefault();
  bookDial.showModal();
});

// Assuming "confirmBtn" is inside the book dialog
bookDial.addEventListener("click", (event) => {
  if (event.target.id === "confirmBtn") {
    event.preventDefault();
    const titleValue = title.value;
    const authorValue = Author.value;
    const pagenosValue = Pagenos.value;
    const readValue = Read.value;
    addBookToLibrary(titleValue, authorValue, pagenosValue, readValue);
    bookDial.close();
  }
});
