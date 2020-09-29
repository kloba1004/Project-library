let library = [];

function Book(title, author, pages, read) {
    this.title = 'Title: ' + title,
    this.author = 'Author: ' + author,
    this.pages = 'Number of pages: ' + pages,
    this.read = 'Read status: ' + read
}

function addBookToLibrary(newBook) {
    library.push(newBook);
}

function displayBook(newBook) {
    newDiv = document.createElement('div');
    newDiv.className = 'book-Card';
    
    let bookInfo = Object.values(newBook);
    bookInfo.forEach(info => {
        newInfo = document.createElement('div');
        newInfo.textContent = info;
        newDiv.appendChild(newInfo);
    })
    
    display.appendChild(newDiv);
}

const openButton = document.querySelector('.openButton');
const form = document.querySelector('.form');
const overlay = document.querySelector('#overlay');
const closeButton = document.querySelector('.closeButton');
const input = document.querySelectorAll('.input');
const display = document.querySelector('.display');

openButton.addEventListener('click', () => {
    openForm();
})

function openForm() {
    form.classList.add('active');
    overlay.classList.add('active');
}

closeButton.addEventListener('click', () => {
    closeForm();
})

function closeForm() {
    form.classList.remove('active');
    overlay.classList.remove('active');
}

overlay.addEventListener('click', () => {
    closeForm();
})

form.addEventListener('submit', (e) => {
    newBook = new Book(input[0].value, input[1].value, input[2].value, input[3].value);
    addBookToLibrary(newBook);
    closeForm();
    displayBook(newBook);
    form.reset();
    e.preventDefault();
})