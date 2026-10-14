
const bookForm = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const statusInput = document.getElementById("status");

const titleError = document.getElementById("title-error");
const authorError = document.getElementById("author-error");

const bookList = document.getElementById("book-list");
const emptyMessage = document.getElementById("empty-message");

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

    // Create a new book card
    const bookCard = document.createElement("li");
    bookCard.className = "book-card";

    const bookTitle = document.createElement("h3");
    bookTitle.textContent = title;

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = "Author: " + author;

    const bookStatus = document.createElement("span");
    bookStatus.className = "book-status";
    bookStatus.textContent = status;

    bookCard.append(bookTitle, bookAuthor, bookStatus);

    // Add the newest book at the top
    bookList.prepend(bookCard);

    // Hide the empty-list message
    emptyMessage.hidden = true;

    // Reset the form for the next book
    bookForm.reset();
    titleInput.focus();
});
