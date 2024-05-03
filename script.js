
const myLibrary = [
    {title: "Deep Work", author: "Cal Newport", pages: 34, readBefore: "Haven't yet"},
    {title: "Atomic Habits", author: "James Clear", pages: 300, readBefore: "Have read"},
    {title: "Sapiens", author: "Yuval Noah Harari", pages: 443, readBefore: "Have read"},
    {title: "The Power of Habit", author: "Charles Duhigg", pages: 371, readBefore: "Haven't yet"},
    {title: "The Four Hour Work Week", author: "Tim Ferriss", pages: 308, readBefore: "Have read"},
    {title: "Thinking, Fast and Slow", author: "Daniel Kahneman", pages: 499, readBefore: "Have read"},
    {title: "The Lean Startup", author: "Eric Ries", pages: 338, readBefore: "Haven't yet"},
    {title: "Deep Work", author: "Cal Newport", pages: 34, readBefore: "Haven't yet"},
    {title: "Atomic Habits", author: "James Clear", pages: 300, readBefore: "Have read"},
    {title: "Sapiens", author: "Yuval Noah Harari", pages: 443, readBefore: "Have read"},
    {title: "The Power of Habit", author: "Charles Duhigg", pages: 371, readBefore: "Haven't yet"},
    {title: "The Four Hour Work Week", author: "Tim Ferriss", pages: 308, readBefore: "Have read"},
    {title: "Thinking, Fast and Slow", author: "Daniel Kahneman", pages: 499, readBefore: "Have read"},
    {title: "The Lean Startup", author: "Eric Ries", pages: 338, readBefore: "Haven't yet"},
];

const table = document.querySelector(".table-body")

function Book(title, author, pages, readBefore){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readBefore = readBefore;
}

function addBookLibrary(){
    
}

myLibrary.forEach((a, index) => {
    table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${a.title}</td>
            <td>${a.author}</td>
            <td>${a.pages}</td>
            <td>${a.readBefore}</td>
        </tr>
    
    
    `
})