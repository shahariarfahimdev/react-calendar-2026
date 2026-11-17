# 📅 React Calendar 2026

### A React Calendar Application | Shahariar Fahim

A calendar application built using **React, JavaScript, CSS3, and Vite**. This project displays all 12 months of 2026 in a clean, organized layout using reusable React components and dynamic date generation.

Developed as part of **CST 3519 — Advanced Web Client Technology** at **New York City College of Technology (CUNY)**.

---

## 🚀 Features

- **Full-Year Calendar:** Displays January through December 2026.
- **Dynamic Date Generation:** Calculates dates and weekday positions using JavaScript.
- **Reusable React Components:** Separates the calendar into individual components for maintainability.
- **CSS Grid Layout:** Organizes 12 months into four columns and three rows.
- **Weekday Headers:** Displays Sunday through Saturday for each month.
- **Clean Interface:** Features a minimalist design with compact spacing and clearly organized dates.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| JavaScript | Date calculations and calendar logic |
| HTML5 | Application structure |
| CSS3 | Styling and calendar grid layout |
| Vite | Development server and build tooling |
| Git & GitHub | Version control and source code hosting |

## 📂 Project Structure

```text
react-calendar-2026/
│
├── public/
│   └── date-function.js
│
├── src/
│   ├── components/
│   │   ├── Calendar.jsx
│   │   └── Month.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 💻 Installation & Setup

### Prerequisites

- Node.js
- npm
- Visual Studio Code (recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/shahariarfahimdev/react-calendar-2026.git
```

### 2. Navigate to the Project

```bash
cd react-calendar-2026
```

### 3. Install Dependencies

```powershell
npm.cmd install
```

### 4. Start the Development Server

```powershell
npm.cmd run dev
```

### 5. Open the Application

Open the local address displayed in the terminal, typically:

`http://localhost:5173/`

Keep the terminal running while using the application.

Press **Ctrl + C** to stop the development server.

## 📸 Application Preview

**React Calendar — 2026**

The application displays all 12 months of 2026 in a four-column, three-row calendar layout.

<img width="570" height="668" alt="React-2026Calendar" src="https://github.com/user-attachments/assets/e07f17ce-a351-4f0c-b3cf-accfcdb3187f" />

## 🧠 Implementation Details

The application uses three primary React components:

**App.jsx**
- Serves as the application's root component.
- Renders the Calendar component.

**Calendar.jsx**
- Displays the year and developer's name.
- Generates 12 Month components.
- Organizes the months into a CSS Grid layout.

**Month.jsx**
- Uses the `generateMonthData()` function.
- Displays month names, weekday headers, and dates.
- Maintains correct weekday alignment.

### Date Utility Functions

The `date-function.js` file was provided by the course instructor and is included without modification.

The React application uses its existing date-generation functionality to render the calendar.

## 🎓 Academic Information

**Institution:** New York City College of Technology (CUNY)  
**Course:** CST 3519 — Advanced Web Client Technology  
**Project:** React Calendar 2026  
**Developer:** Shahariar Fahim  
**Academic Year:** Fall 2026

## 👨‍💻 Developer

**Shahariar Fahim**

Computer Systems Technology student specializing in Software Development at New York City College of Technology.

Interested in software engineering, full-stack development, and cloud technologies.

**GitHub:** shahariarfahimdev

## 📄 Acknowledgments

The original `date-function.js` utility was provided by the CST 3519 course instructor.

The React component implementation, calendar layout, and application integration were completed as part of the course project.
