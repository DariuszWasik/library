const myLibrary = []



//the constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = info;
}

const book1 = new Book ('Robinson Crusoe', 'Daniel Defoe', 357, true);
const book2 = new Book ('Lord of the Rings', 'JRR Tolkien', 1265, true);

addBookToLibrary(book1);
addBookToLibrary(book2);

function addBookToLibrary(a) {
    myLibrary.push(a);

}

const dialogWindow = document.getElementById("dialogWindow");


const buttonNew = document.querySelector("#new");

buttonNew.addEventListener('click', () => {
    dialogWindow.showModal();
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
});

// dialogWindow.showModal();

const confirmBtn = document.getElementById('confirm');
const author = document.querySelector('#author');
const title = document.querySelector('#title');
const pages = document.querySelector('#pages')
const read = document.querySelector('#read')

let currentBook = [];
let newBook = {}
const singleBook = document.querySelector('.book');
const container = document.querySelector('.books');

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
    // container.innerHTML = `<button id="new">add new book</button>`
    // const buttonNew = document.querySelector("#new");
    putBooksOnScreen();
} )

function putBooksOnScreen () {
    // console.log(container.innerHTML)
    container.innerHTML = ''
    myLibrary.forEach((book) => {
        let div =  document.createElement('div');
       div.className = 'book';
       let content = `
        <h3>${book.title}</h3>
            <h5>by ${book.author}</h5>
            <p>${book.pages } pages</p>
            <p>Read? ${book.read}</p>
            `
            div.innerHTML = content;
            container.appendChild(div);
            
        })
        container.appendChild(buttonNew)
    }
    putBooksOnScreen();