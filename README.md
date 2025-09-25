# Project Management App

This is a simple project management application built with React and Tailwind CSS. It allows users to create projects, add tasks to projects, and manage their projects in a simple interface.

## 🚀 Live Demo
👉 [View here](https://project-manager-web-app.netlify.app/)

## Features

*   **Create Projects:** Add new projects with a title, description, and due date.
*   **Add Tasks:** Add tasks to individual projects.
*   **Delete Projects:** Remove projects that are no longer needed.
*   **Delete Tasks:** Remove tasks from projects.
*   **Responsive Design:** The application is designed to work on different screen sizes.

## Technologies Used

*   React
*   Tailwind CSS
*   JavaScript
*   HTML
*   CSS

## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd Project-management
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

5.  **Open the application in your browser:**

    Go to `http://localhost:5173` or the address provided by Vite.


## State Management

The application uses the `useState` hook to manage the state, including:

*   `projectsState`: An object containing the selected project ID, the list of projects, and the list of tasks.
    *   `selectedProjectID`: The ID of the currently selected project.
    *   `projects`: An array of project objects.
    *   `tasks`: An array of task objects.

## Tailwind CSS Configuration

The `tailwind.config.js` file configures Tailwind CSS, specifying the content files to be processed and any theme extensions.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
