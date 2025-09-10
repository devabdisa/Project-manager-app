# Project Management App

This is a simple project management application built with React and Tailwind CSS. It allows users to create projects, add tasks to projects, and manage their projects in a simple interface.

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

## File Structure

*   `index.html`: Main HTML file.
*   `tailwind.config.js`: Tailwind CSS configuration file.
*   `src/`: Source code directory.
    *   `App.jsx`: Main application component.
    *   `components/`: React components.
        *   `Button.jsx`: Reusable button component.
        *   `Input.jsx`: Reusable input component.
        *   `Modal.jsx`: Modal component for displaying alerts.
        *   `NewProject.jsx`: Component for creating new projects.
        *   `NoProjectSelected.jsx`: Component displayed when no project is selected.
        *   `ProjectsSidebar.jsx`: Sidebar component for project navigation.
        *   `SelectedProject.jsx`: Component for displaying a selected project.
        *   `Tasks.jsx`: Component for displaying and managing tasks.
        *   `NewTask.jsx`: Component for adding new tasks.
    *   `assets/`: Images and other assets.

## Components

*   **App:** The main component that manages the application state and renders the UI.
*   **ProjectsSidebar:** Displays the list of projects and allows the user to select a project or create a new one.
*   **NoProjectSelected:** Displayed when no project is selected, prompting the user to select or create a project.
*   **NewProject:** Allows the user to create a new project with a title, description, and due date.
*   **SelectedProject:** Displays the details of the selected project and allows the user to add and manage tasks.
*   **Tasks:** Displays the list of tasks for the selected project and allows the user to add new tasks or delete existing ones.
*   **NewTask:** Input field and button to add a new task to the selected project.
*   **Input:** Reusable input component for text, textarea, and date inputs.
*   **Button:** Reusable button component with consistent styling.
*   **Modal:** Reusable modal component for displaying alerts and messages.

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

