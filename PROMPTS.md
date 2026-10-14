# Book Tracker — Vibe Coding Documentation

## Project Overview

Project Name: Book Tracker

**Description:** A simple web application for managing a personal reading list. Users can add books, track their reading status, search their library, and remove books.

**Technologies Used:** HTML, CSS, JavaScript, and browser localStorage.

## AI-Assisted Development

This project was developed through an iterative vibe-coding workflow. AI assistance was used to understand requirements, implement features step by step, troubleshoot issues, and test changes. Each feature was checked before moving on to the next.

PROMPT 1
I want to build a simple Book Tracker web app using plain HTML, CSS, and JavaScript.

The app should let users:

- Add a book with a title, author, and status (To read, Reading, or Finished).
- View their books, newest first.
- Search by title or author.
- Change a book's reading status.
- Keep their books saved after refreshing the page.

I am a beginner and want to build this step by step, learning how each part works. Do not write any code yet.

First, recommend the files I should create and explain what each file does. Also explain how browser localStorage will save the books.

PROMPT 2
done..Let's build the first feature only: adding a book and displaying the list.

Create the initial versions of index.html, style.css, and app.js.

Requirements:

- Show a form with a Title input, an Author input, and a Status dropdown with To read, Reading, and Finished.
- When I click Add, display the new book at the top of the list.
- Title and Author are required.
- If either field is empty, show an error message under that specific input.
- Keep the design simple and readable.

Do not implement search or localStorage yet. Explain what each file does and how I can run and test this feature locally.

PROMPT 3
The first feature of my Book Tracker works, and I have tested adding books, validating empty title and author fields, and showing the newest book first.

Now add browser localStorage so that:

- The book list is saved whenever a book is added.
- Previously saved books load when the page opens.
- Each book's title, author, status, and order are preserved after refreshing.

Do not add search or any new features yet. Make the smallest changes necessary to my existing code. Explain the changes and tell me how to test them.

PROMPT 4
Yes ready..My Book Tracker can now add books, validate required fields, show the newest books first, and save books in localStorage. I have tested these features, and they work.

Now add a search box above the book list.

Requirements:

- Filter the visible books as I type.
- Match text in either the book title or author name.
- Ignore uppercase and lowercase differences.
- Clearing the search should show all books again.
- Searching must not delete or modify saved books.
- Keep all existing features working.
- Make the smallest necessary changes and explain what you changed.

PROMPT 5
My Book Tracker now supports adding books, required-field validation, newest-first ordering, localStorage persistence, and searching by title or author.

Now add the ability to change a book's status between To read, Reading, and Finished.

Requirements:

- Each book should have a status dropdown or equivalent control.
- Changing the status should update the displayed book immediately.
- The updated status must be saved to localStorage.
- The status counts, if present, should remain accurate.
- Keep all existing features working.
- Make the smallest necessary changes and explain how I can test them.

PROMPT 6
Great..Now my Book Tracker supports adding books, required-field validation, newest-first ordering, localStorage persistence, searching by title or author, and changing a book's status.

I want to add an additional feature that is duplicate-book prevention to my existing app.

Requirements:

- Before adding a book, check whether a book with the same title AND author already exists.
- Ignore capitalization and leading/trailing spaces when comparing.
- If it is a duplicate, show a clear message: "This book is already in your library."
- Do not add the duplicate or overwrite the existing book's status.
- Allow books with the same title but different authors, or the same author but different titles.
- Keep all existing functionality working.
- Make the smallest necessary changes and explain what changed.

PROMPT 7
My Book Tracker now supports adding books, validation, newest-first ordering, localStorage, search, status changes, and duplicate-book prevention.
Add a Delete button to each book entry. When clicked, it should remove that book from the list and localStorage. Keep all existing features working, make the smallest necessary changes, and explain what changed.

PROMPT 8
Add a small summary above my Book Tracker list showing the number of books with each status: To read, Reading, and Finished. Update the counts immediately when a book is added, deleted, or its status changes. Keep localStorage, search, duplicate prevention, and all existing features working. Make the smallest necessary changes and explain how to test them.

AI Mistake Encountered and Correction

Mistake: During the development of my Book Tracker application, the AI incorrectly assumed that my JavaScript file was named `scripts.js` instead of `script.js`. This led to confusion while discussing the project files and GitHub updates.

How I Identified It: I checked my project folder and clarified that the correct filename was `script.js`. I verified the script reference in my HTML file to ensure it matched the actual filename.

How It Was Corrected: The guidance was corrected to consistently use `script.js`. I continued working with the correct file and ensured that the project files remained consistent.

What I Learned: AI-generated suggestions should not be followed blindly. I learned to verify file names, check the existing code, and test changes before accepting AI recommendations. This experience helped me understand the importance of human oversight when using AI for software development.

AI-Assisted Attempt to Prevent Duplicate Book Entries

Objective: Prevent users from adding the same book more than once to the Book Tracker application.

Prompt Used: I asked the AI to modify my existing JavaScript code so that, when a book with the same title and author was entered again, the application would display the message “This book is already in your library.” The existing book's status should remain unchanged, and all other features should continue working.

AI Implementation: The AI suggested using JavaScript's `Array.some()` method to check whether a book with the same title and author already existed. It used `trim()` to ignore leading and trailing spaces and `toLowerCase()` to ignore differences in capitalization.

Mistake / Challenge Encountered: Although the duplicate-prevention feature was implemented, an existing duplicate entry for *They Came to Baghdad* by Agatha Christie remained in the library. The new validation prevented duplicate additions, but it did not automatically remove duplicates that were already stored in `localStorage`.

Correction: I manually deleted the extra *They Came to Baghdad* entry and verified the duplicate-prevention feature separately.

Outcome: The application could prevent new duplicate entries while preserving the existing functionality, including searching, changing book statuses, deleting books, and saving data in `localStorage`.

What I Learned: Preventing new duplicates and cleaning up existing duplicate records are two different problems. I learned to define duplicate criteria clearly, test edge cases such as differences in capitalization and spaces, and distinguish between validation logic and data cleanup. I also learned to verify AI-generated code through actual testing rather than relying only on the suggested implementation.

Things Not Implemented or Fully Verified

Mobile Responsiveness: The application has not been fully tested on mobile devices. Although the existing CSS includes some mobile-friendly properties, it is uncertain whether the layout works correctly across different screen sizes. Testing and further adjustments may be required to ensure a smooth mobile experience.
