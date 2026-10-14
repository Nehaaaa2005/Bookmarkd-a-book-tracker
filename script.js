
const bookForm = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const statusInput = document.getElementById("status");

const titleError = document.getElementById("title-error");
const authorError = document.getElementById("author-error");

const bookList = document.getElementById("book-list");
const emptyMessage = document.getElementById("empty-message");

const searchInput = document.getElementById("search-input");

// NEW: Store all books in an array
let books = [];

// NEW: Save the book array in localStorage
function saveBooks() {
    localStorage.setItem("books", JSON.stringify(books));
}


function displayBooks() {
    bookList.innerHTML = "";

    // Get the search text and ignore letter case
    const searchText = searchInput.value.trim().toLowerCase();

    // Filter books by title or author
    const filteredBooks = books.filter(function (book) {
        return (
            book.title.toLowerCase().includes(searchText) ||
            book.author.toLowerCase().includes(searchText)
        );
    });

    // Display only matching books
    filteredBooks.forEach(function (book) {
        const bookCard = document.createElement("li");
        bookCard.className = "book-card";

        const bookTitle = document.createElement("h3");
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = "Author: " + book.author;

        
        const bookStatus = document.createElement("select");
        bookStatus.className = "book-status";

        ["To read", "Reading", "Finished"].forEach(function (status) {
    const option = document.createElement("option");
    option.value = status;
    option.textContent = status;

    if (status === book.status) {
        option.selected = true;
    }

    bookStatus.append(option);
        });

        // Update and save the book when its status changes
        bookStatus.addEventListener("change", function () {
           book.status = bookStatus.value;
           saveBooks();
           displayBooks();
        });

        bookCard.append(bookTitle, bookAuthor, bookStatus);

        bookList.append(bookCard);
    });

    // Show an appropriate message
    if (books.length === 0) {
        emptyMessage.textContent =
            "No books added yet. Add your first book above!";
        emptyMessage.hidden = false;
    } else if (filteredBooks.length === 0) {
        emptyMessage.textContent = "No matching books found.";
        emptyMessage.hidden = false;
    } else {
        emptyMessage.hidden = true;
    }
}

searchInput.addEventListener("input", displayBooks);

// NEW: Load previously saved books when the page opens
const savedBooks = localStorage.getItem("books");

if (savedBooks !== null) {
    try {
        const parsedBooks = JSON.parse(savedBooks);

        if (
            Array.isArray(parsedBooks) &&
            parsedBooks.every(book =>
                book &&
                typeof book.title === "string" &&
                typeof book.author === "string" &&
                ["To read", "Reading", "Finished"].includes(book.status)
            )
        ) {
            books = parsedBooks;
        }
    } catch (error) {
        console.error("Could not load saved books:", error);
    }
}

displayBooks();

bookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous error messages
    titleError.textContent = "";
    authorError.textContent = "";

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const status = statusInput.value;

    let isValid = true;

    // Validate the title
    if (title === "") {
        titleError.textContent = "Please enter a book title.";
        isValid = false;
    }

    // Validate the author
    if (author === "") {
        authorError.textContent = "Please enter the author's name.";
        isValid = false;
    }

    // Stop if either required field is empty
    if (!isValid) {
        return;
    }

    // NEW: Add the book to the beginning of the array
    const newBook = {
        title: title,
        author: author,
        status: status
    };

    books.unshift(newBook);

    // NEW: Save the updated list
    saveBooks();

    // Display the updated list
    displayBooks();

    // Reset the form for the next book
    bookForm.reset();
    titleInput.focus();
});