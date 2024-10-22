const myLibrary = []

//the constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = info;
}

function addBookToLibrary(a) {
    myLibrary.push(a);

}

const dialogWindow = document.getElementById("dialogWindow");

// function openDialog() {
//     dialogWindow.showModal()
// }
const buttonNew = document.querySelector("#new");

buttonNew.addEventListener('click', () => {
    dialogWindow.showModal();
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
});

dialogWindow.showModal();

const confirmBtn = document.getElementById('confirm');

let currentBook = [];
const author = document.querySelector('#author');
const title = document.querySelector('#title');
const pages = document.querySelector('#pages')
const read = document.querySelector('#read')

let newBook = {}

confirmBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    currentBook.push(title.value);
    currentBook.push(author.value);
    currentBook.push(pages.value);
    currentBook.push(read.checked)

    console.log(currentBook);    
    newBook = new Book(currentBook[0], currentBook[1], currentBook[2], currentBook[3])
    addBookToLibrary(newBook) 
    console.log(newBook)
    console.log('library', myLibrary)
    newBook = {};
    currentBook = [];
    dialogWindow.close();
} )