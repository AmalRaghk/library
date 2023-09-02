cards=document.querySelector('.cards');
addbtn=document.querySelector('#addbtn');
bookDial=document.querySelector('#bookDial')
const myLibrary = [];

function Book() {

}

function addBookToLibrary() {
  
}
bookDial.addEventListener("close", (e) => {
  outputBox.value =
    bookDial.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${bookDial.returnValue}.`; // Have to check for "default" rather than empty string
});
addbtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    bookDial.showModal();

  });