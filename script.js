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
    let newRow = document.createElement('div');
    newRow.className = 'new-row';

    let i = 0;
    let bookInfo = Object.values(newBook);
    bookInfo.forEach(info => {

        if (i < 3 ) {
            let p = document.createElement('p');
            p.textContent = info;
            if (i < 2) {
                p.className = 'longer-text';
            }
            if (i === 0) {
                p.setAttribute('id', 'first-column');
            }
            newRow.appendChild(p);
        } else {
            let buttonStatus = document.createElement('button');
            if (info === 'yes') {
                buttonStatus.textContent = 'READ';
            } else {
                buttonStatus.textContent = 'NOT READ';
            }
            buttonStatus.className = 'status';
            newRow.appendChild(buttonStatus);

            buttonStatus.addEventListener('click', (e) => {
                if (buttonStatus.textContent === 'READ') {
                    buttonStatus.textContent = 'NOT READ';
                    localStorage[`read${library.indexOf(newBook)}`] = 'no';
                } else {
                    buttonStatus.textContent = 'READ';
                    localStorage[`read${library.indexOf(newBook)}`] = 'yes';
                }
            })
        }
        
        i++;
    })

    let removeButton = document.createElement('button');
    removeButton.className = 'remove';
    removeButton.textContent = 'REMOVE';
    newRow.appendChild(removeButton);

    display.appendChild(newRow);
    removeButton.addEventListener('click', (e) => {
        display.removeChild(newRow);
        localStorage.removeItem(`title${library.indexOf(newBook)}`);
        localStorage.removeItem(`author${library.indexOf(newBook)}`);
        localStorage.removeItem(`pages${library.indexOf(newBook)}`);
        localStorage.removeItem(`read${library.indexOf(newBook)}`);
        library.splice(library.indexOf(newBook),1);
        localStorage.clear();
        populateStorage();
    });
}
const openButton = document.querySelector('.openButton');
const form = document.querySelector('.form');
const overlay = document.querySelector('#overlay');
const closeButton = document.querySelector('.closeButton');
const input = document.querySelectorAll('.input');
const radio = document.querySelectorAll('.radio');
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
    let j;
    radio[0].checked ? j = 3 : j = 4;
    newBook = new Book(input[0].value, input[1].value, input[2].value, input[j].value);
    addBookToLibrary(newBook);
    closeForm();
    displayBook(newBook);
    populateStorage();
    form.reset();
    e.preventDefault();
})

function populateStorage() {
   library.forEach(book => {
       localStorage.setItem(`title${library.indexOf(book)}`, book['title']);
       localStorage.setItem(`author${library.indexOf(book)}`, book['author']);
       localStorage.setItem(`pages${library.indexOf(book)}`, book['pages']);
       localStorage.setItem(`read${library.indexOf(book)}`, book['read']);
    });
}


function setDisplay() {
    for (i = 0; i < localStorage.length/4; i++) {
        let title = localStorage.getItem(`title${i}`);
        let author = localStorage.getItem(`author${i}`);
        let pages = localStorage.getItem(`pages${i}`);
        let read = localStorage.getItem(`read${i}`);

        let newBook = new Book(title, author, pages, read);
        addBookToLibrary(newBook);
        displayBook(newBook);
    }
}

if (!localStorage.getItem(`title0`)) {
    populateStorage();
} else {
    setDisplay();
}
