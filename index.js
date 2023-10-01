
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
    ${books.map((book, index) => `
    <li class="book-list">${book}
      <button class ="remove-button" onclick="removeBook(${index})">Remove</button>
    </li>
  `).join('')}
    </ul>
    `

}

function showContacts() {
    const content = document.getElementById('content');
    content.innerHTML = `
    
      <h1>Contact Information</h1>
      <ul>
        <li class="contact">Email: example@example.com</li>
        <li class="contact">Phone: 123-456-7890</li>
      </ul>
    `;
  }

function addBook(){
    const input = document.getElementById('book-input');
    const bookName = input.value.trim();

    if (bookName !== '') {
        books.push(bookName);
        input.value = '';
        showHome();
        window.prompt('Book added to list!')
    }
}
function removeBook(index) {
    books.splice(index, 1);
    showBooks();
  }

showHome();
