const myLibrary = []



//the constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggle = function() {
    this.read = !(this.read);
}

const book1 = new Book ('Robinson Crusoe', 'Daniel Defoe', 357, true);
const book2 = new Book ('Lord of the Rings', 'JRR Tolkien', 2265, true);
const book3 = new Book ('Hobbit', 'JRR Tolkien', 320, false);
const book4 = new Book ('Orthodoxy', 'G.K. Chesterton', 411, true);
const book5 = new Book ('The Witcher', 'Andrzej Sapkowski', 1387, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);

function addBookToLibrary(a) {
    myLibrary.push(a);
    giveIndex();
    }

function giveIndex() {
    myLibrary.forEach((a)=>{
        a.dataIndex = myLibrary.indexOf(a)}
    )}

const dialogWindow = document.getElementById("dialogWindow");


const buttonNew = document.querySelector("#new");

buttonNew.addEventListener('click', () => {
    dialogWindow.showModal();
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
});


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
    putBooksOnScreen();
} )


function putBooksOnScreen () {
    container.innerHTML = ''
    myLibrary.forEach((book) => {
        let div =  document.createElement('div');
       div.className = 'book';
       let content = `
       <h3>${book.title}</h3>
       <h5>by ${book.author}</h5>
       <p>${book.pages } pages</p>
            <p>Read? ${book.read}</p>
            <div class='btns'>
             <button id="status" class="${book.dataIndex}">read?</button>
             <button id="remove" class="${book.dataIndex}">remove</button>
            </div>
             `
            div.innerHTML = content;
            container.appendChild(div);
            
        })
        container.appendChild(buttonNew);
        
        
        const status = document.querySelectorAll('#status');
        const remove = document.querySelectorAll('#remove');
        
        remove.forEach( (r)=> r.addEventListener('click', () => {
            let i = parseInt(r.className);
            myLibrary.splice(i,1);
            giveIndex();
            putBooksOnScreen();
        }))

        status.forEach( (s) => s.addEventListener('click', () => {
            let i = parseInt(s.className);
            myLibrary[i].toggle();
            giveIndex();
            putBooksOnScreen();
        }))

    }    
    putBooksOnScreen();

    