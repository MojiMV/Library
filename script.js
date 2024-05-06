
const table = document.querySelector(".table-body");
const dialog = document.querySelector(".book-dialog");

const myLibrary = [
    {title: "Deep Work", author: "Cal Newport", pages: 34, readBefore: "Haven't yet"},
    {title: "Atomic Habits", author: "James Clear", pages: 300, readBefore: "Have read"},
    {title: "Sapiens", author: "Yuval Noah Harari", pages: 443, readBefore: "Have read"},
    {title: "The Power of Habit", author: "Charles Duhigg", pages: 371, readBefore: "Haven't yet"},
    {title: "The Four Hour Work Week", author: "Tim Ferriss", pages: 308, readBefore: "Have read"},
    {title: "Thinking, Fast and Slow", author: "Daniel Kahneman", pages: 499, readBefore: "Have read"},
    {title: "The Lean Startup", author: "Eric Ries", pages: 338, readBefore: "Haven't yet"},
];

myLibrary.forEach((a, index) => {
        a.changeReadStatus = function() {
            if (this.readBefore === "Have read") {
                this.readBefore = "Haven't yet";
            } else if (this.readBefore === "Haven't yet") {
                this.readBefore = "Have read";
            } else {
                this.readBefore = "Have read";
            }
            updateTable();
        };
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${a.title}</td>
        <td>${a.author}</td>
        <td>${a.pages}</td>
        <td>${a.readBefore} <button class="change-status"><div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>swap-horizontal</title><path d="M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z" /></svg> </div></button></td>
        <td><button class="remove-book" data-index="${index}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-thick</title><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg></div></button></td>
    `;
    
    row.querySelector('.remove-book').addEventListener('click', (event) => {
        const indexToRemove = event.target.dataset.index;
        removeBook(indexToRemove);
    });

    row.querySelector('.change-status').addEventListener('click', function (event){
        console.log(a.readBefore)
        a.changeReadStatus();
        console.log(a.readBefore)
    })

    table.appendChild(row);
});

let tableWidth = document.querySelector(".table").offsetWidth;
// tableWidth = tableWidth - 120;
document.querySelector(".newBook-button-container").style.width = tableWidth + "px";

function Book(title, author, pages, readBefore){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readBefore = readBefore;

}

Book.prototype.changeReadStatus = function (){
    if (this.readBefore == "Have read"){
        this.readBefore = "Haven't yet";
    } else if (this.readBefore == "Haven't yet"){
        this.readBefore = "Have read";
    } else{
        this.readBefore = "Have read";
    }
    updateTable();
    console.log("worked");
}

function updateTable(){

    table.innerHTML = "";

    myLibrary.forEach((a, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${a.title}</td>
            <td>${a.author}</td>
            <td>${a.pages}</td>
            <td>${a.readBefore} <button class="change-status"><div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>swap-horizontal</title><path d="M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z" /></svg> </div></button></td>
            <td><button class="remove-book" data-index="${index}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-thick</title><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg></div></button></td>
        `;
        
        row.querySelector('.remove-book').addEventListener('click', (event) => {
            const indexToRemove = event.target.dataset.index;
            removeBook(indexToRemove);
        });
    
        row.querySelector('.change-status').addEventListener('click', function (event){
            a.changeReadStatus();
        })
    
        table.appendChild(row);
    });

    let tableWidth = document.querySelector(".table").offsetWidth;
    // tableWidth = tableWidth - 180;
    document.querySelector(".newBook-button-container").style.width = tableWidth + "px";

    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    updateTable(); 
}

document.querySelector(".newBook-button").addEventListener("click", (e)=>{
    e.preventDefault();
    dialog.showModal();
})

document.querySelector("#addButton").addEventListener("click", (event)=>{
    event.preventDefault();
    const newTitle = document.querySelector("#title").value;
    const newAuthor = document.querySelector("#author").value;
    const newPages = document.querySelector("#pages").value;

    let newHaveRead;
    const haveReadRadio = document.querySelector('input[name="readBefore"]:checked');
    if (haveReadRadio) {
        newHaveRead = haveReadRadio.value;
    } else {
        newHaveRead = "";
    }

    const newBook = new Book(newTitle, newAuthor, newPages, newHaveRead);
    myLibrary.push(newBook);
    dialog.close();
    updateTable();
})

document.querySelector("#cancelButton").addEventListener("click", (event)=>{
    event.preventDefault();
    dialog.close();
})

