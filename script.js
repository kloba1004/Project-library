let library = [];

function Book(title, author, pages, read) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
}

function addBookToLibrary(newBook) {
    library.push(newBook);
}

function displayBook(newBook) {
    let newDiv = document.createElement('div');
    newDiv.className = 'book-Card';
    
    newDiv.addEventListener('click', () => newDiv.classList.toggle('expanded'));

    let bookInfo = Object.values(newBook);
    bookInfo.forEach(info => {
        newInfo = document.createElement('div');
        newInfo.textContent = info;
        newInfo.className = 'text';
        newDiv.appendChild(newInfo);
    })

    newDiv.firstElementChild.className = 'title';

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