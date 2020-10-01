let library = [],
    i = 0;

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
    let card = document.createElement('div');
    card.className = 'card';

    let face1 = document.createElement('div');
    face1.className = 'face';
    face1.classList.add('face1');

    let face2 = document.createElement('div');
    face2.className = 'face';
    face2.classList.add('face2');

    let content1 = document.createElement('div');
    content1.className = 'content';

    let img = document.createElement('img');
    img.src = 'book.png';
    content1.appendChild(img);

    let content2 = document.createElement('div');
    content1.className = 'content';
    
    let bookInfo = Object.values(newBook);
    bookInfo.forEach(info => {
        text = document.createElement('div');

        if (i === 0) {
            text.className = 'title';
            content1.appendChild(text);
        
        } else {
            text.className = 'text';
            content2.appendChild(text);
        }
        
        text.textContent = info;
        i++;
    })

    face1.appendChild(content1);
    face2.appendChild(content2);
    card.appendChild(face1);
    card.appendChild(face2);
    display.appendChild(card);
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