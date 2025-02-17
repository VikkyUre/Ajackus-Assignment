User Management Dashboard

This project is a React-based application that manages a list of users. It supports adding, editing, and deleting users while simulating server interactions using the JSONPlaceholder API.


---

Features

Fetch and Display Users: Fetches user data from the JSONPlaceholder API and displays it in a table format.

Add User: Add a new user to the list using a simple form.

Edit User: Update user details by selecting an existing user from the list.

Delete User: Remove a user from the list.

Error Handling: Displays friendly error messages when API calls fail.

Responsive UI: Fully responsive design using CSS.

---

Installation

Follow these steps to set up and run the project:

1. Clone the repository:

git clone <repository-url>
cd ajackus-assignment


2. Install dependencies:

npm install


3. Start the development server:

npm start


4. Open your browser and navigate to http://localhost:3000.

---

API Used

The project uses the JSONPlaceholder API for simulating user data.

Base URL: https://jsonplaceholder.typicode.com/users



---

Components

App Component

Manages the overall state of the application, including users, selected user, and error handling.

Handles API interactions using axios.


UserList Component

Displays a table of users.

Includes "Edit" and "Delete" buttons for each user.


UserForm Component

Provides a form for adding or editing user details.

Handles form validation for required fields and email format.


ErrorBoundary Component

Catches errors in the component tree and displays a fallback message.

---

Built With

React - Frontend JavaScript library.

Axios - For handling HTTP requests.

CSS - Styling the app.
