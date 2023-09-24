const cards=document.querySelector('.cards');
const addbtn=document.querySelector('#addbtn');
const bookDial=document.querySelector('#bookDial');
const title=document.querySelector('#title');
const Author=document.querySelector('#Author');
const Pagenos=document.querySelector('#Pagenos');
const Read=document.querySelector('select[name="Read"]')
const myLibrary = [];
var k;

function Book() {
  const book={
    "Title":'...',
    "Author":'...',
    "Pagenos":'...',
    "Read":'...'
  }
  return book

}

function addBookToLibrary(book,Title,Author,Pagenos,Read) {
  book["Title"]=Title;
  book["Author"]=Author;
  book["Pagenos"]=Pagenos;
  book["Read"]=Read;
  return book
}
bookDial.addEventListener("close", (e) => {
    bookDial.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${bookDial.returnValue}.`; // Have to check for "default" rather than empty string
});
addbtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    bookDial.showModal();

  });
  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    k=Book()
    k=addBookToLibrary(k,title.value,Author.value,Pagenos.value,Read.value)
    myLibrary.push(k)
    console.log(myLibrary)
    bookDial.close();
    
  });