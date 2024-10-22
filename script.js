const myLibrary = []

//the constructor function
function Book(title, author, pages, read, info) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = info;
}

function addBookToLibrary() {

}

const dialogWindow = document.getElementById("dialogWindow");

// function openDialog() {
//     dialogWindow.showModal()
// }
const buttonNew = document.querySelector("#new");

buttonNew.addEventListener('click', () => {
    dialogWindow.showModal();
});

// dialogWindow.showModal();