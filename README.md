# Alyjuoma-UI

A full-stack application with Node.js backend and React frontend, connected to MySQL database to show data as bar chart and line chart. This development is made part of https://www.hamk.fi/projektit/alyjuoma-automaatti-2022/ where data was utilized to demonstarte dirinking events results.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- MySQL database server

## Installation

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd <your-project-directory>
```

### 2. Install dependencies

#### Backend dependencies
```bash
# Navigate to backend directory (if separate) or root directory
npm install
```

#### Frontend dependencies
```bash
# Navigate to frontend directory
cd frontend  # or wherever your frontend code is located
npm install
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory of your project and add the following environment variables:

```env
PORT=4000
MYSQL_HOST=your_mysql_host
MYSQL_USER=your_mysql_username
MYSQL_DATABASE=your_database_name
MYSQL_PASSWORD=your_mysql_password
```

**Important:** 
- Replace the placeholder values with your actual MySQL database credentials
- Never commit the `.env` file to version control for security reasons
- Add `.env` to your `.gitignore` file

### Database Setup

1. Ensure your MySQL server is running
2. Create the database specified in your `MYSQL_DATABASE` environment variable
3. Make sure the user specified in `MYSQL_USER` has appropriate permissions to access the database

## Running the Application

### Start the Backend Server

```bash
# From the root directory (or backend directory)
node server.js
```

The backend server will start on port 4000 (or the port specified in your `.env` file).

### Start the Frontend Development Server

```bash
# Navigate to frontend directory
cd frontend  # adjust path as needed
npm start
```

The frontend development server will typically start on port 3000 and should automatically open in your browser.

## Project Structure

```
project-root/
├── server.js          # Backend entry point
├── package.json       # Backend dependencies
├── .env              # Environment variables (not in repo)
├── .gitignore        # Git ignore file
├── frontend/         # Frontend application
│   ├── package.json  # Frontend dependencies
│   └── src/          # Frontend source code
└── README.md         # This file
```

## Development

### Backend Development
- The backend server runs on the port specified in the `PORT` environment variable
- Server file: `server.js`
- Restart the server after making changes: `node server.js`

### Frontend Development
- The frontend development server supports hot reloading
- Changes will automatically refresh in the browser
- Start command: `npm start`

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Backend server port (needs to be 4000) | `4000` |
| `MYSQL_HOST` | MySQL server hostname/IP | `localhost` or `192.168.1.100` |
| `MYSQL_USER` | MySQL username | `your_username` |
| `MYSQL_DATABASE` | MySQL database name | `your_database_name` |
| `MYSQL_PASSWORD` | MySQL password | `your_secure_password` |

## License

[Add your license information here]
