# Next.js-Assigment
## Overview of Your WeFrame Assignment Main Files
Based on the files you've provided, your WeFrame assignment appears to be a React-based dashboard application built with Next.js. Below is a summary and explanation of the main files and their roles in your project.


<img width="809" alt="Screenshot 2025-04-23 at 10 35 34 PM" src="https://github.com/user-attachments/assets/9f2a2324-3e54-4615-96c6-a9c9cf9087e0" />

## Main Files and Their Functions
1. index.js
Purpose: Serves as the main page (likely pages/index.js in a Next.js app).

# Key Features:

Imports core UI components: Sidebar, Topbar, StoryCard, and FilterBar.

Uses a dummyData array to render multiple StoryCard components, each displaying a story with details like title, category, date, status, views, and image.

## Example data structure for stories:

js
{
  title: "How 7 lines of code turned into $36B Empire",
  category: "Business",
  date: "20Sep2022",
  status: "Published",
  views: 428,
  imageUrl: "/img3.jpg"
}
Role: Brings together all main UI components and provides data to display stories on the dashboard.

2. # Sidebar.js
Purpose: Implements the sidebar navigation for the dashboard.

Note: The file failed to load, so details are unavailable, but typically, this would include navigation links or menu items for different dashboard sections.

3. # Topbar.js
Purpose: Renders the top navigation bar.

Key Features:

Imports CSS module for styling.

Displays a simple welcome message: "Welcome back."

Role: Provides a consistent header across the dashboard for user navigation or branding.

4. # FilterBar.js
Purpose: Implements a filter bar for filtering stories or dashboard content.

Key Features:

Imports a CSS module for styling.

Returns a React fragment; the detailed UI is not shown in the snippet, but it is likely meant for filter controls (e.g., dropdowns, buttons).

5. # StoryCard.js
Purpose: Displays individual story cards with details.

Key Features:

Receives props: imageUrl, views, title, category, date, status.

Uses a CSS module for styling.

Renders the story information in a card layout.

Role: Visual component for presenting each story or item in the dashboard.

6. # package.json
Purpose: Configuration file for the project.

## Key Features:

Specifies project metadata and scripts for development, build, and linting.

Lists dependencies: React 19, Next.js 15, and ESLint for code quality.

Role: Manages project dependencies and scripts for running and building your application.

How These Fit Together
index.js is the entry point, assembling the dashboard layout using Sidebar, Topbar, FilterBar, and multiple StoryCard components.

Sidebar and Topbar provide navigation and header UI.

FilterBar allows users to filter visible stories.

StoryCard visually represents each story from the data.

package.json ensures all necessary libraries and tools are installed and configured.

