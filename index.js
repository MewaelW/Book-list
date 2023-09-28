
let books = [];
function showHome() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <h1>Welcome to your Book List</h1>
    <p>This section displays your personal book list</p>
    <div id="home-section">
    <h2>Add a Book</h2>
    <input type="text" id="book-input" placeholder="Add a book here">
    <button onclick="addBook()">Add Book</button>
  </div>
    `;

}

function showBooks() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <h1>Book List</h1>
    <ul class="book-list">
        ${books.map(book => `<li> ${book}</li>`).join('')}
    </ul>
    `

}

function addBook(){
    const input = document.getElementById('book-input');
    const bookName = input.value.trim();

    if (bookName !== '') {
        books.push(bookName);
        input.value = '';
        showBooks();
    }
}
showHome();
