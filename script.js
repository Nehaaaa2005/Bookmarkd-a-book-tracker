
const bookForm = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const statusInput = document.getElementById("status");

const titleError = document.getElementById("title-error");
const authorError = document.getElementById("author-error");

const bookList = document.getElementById("book-list");
const emptyMessage = document.getElementById("empty-message");

// NEW: Store all books in an array
let books = [];

// NEW: Save the book array in localStorage
function saveBooks() {
    localStorage.setItem("books", JSON.stringify(books));
}

// NEW: Display all books in the array
function displayBooks() {
    bookList.innerHTML = "";

    books.forEach(function (book) {
        const bookCard = document.createElement("li");
        bookCard.className = "book-card";

        const bookTitle = document.createElement("h3");
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement("p");
        bookAuthor.textContent = "Author: " + book.author;

        const bookStatus = document.createElement("span");
        bookStatus.className = "book-status";
        bookStatus.textContent = book.status;

        bookCard.append(bookTitle, bookAuthor, bookStatus);
        bookList.append(bookCard);
    });

    // Show the empty message only when there are no books
    emptyMessage.hidden = books.length > 0;
}

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
