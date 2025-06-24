require('dotenv').config()

const express = require('express')
const mysql = require('mysql2')

// express app
const app = express()

// middleware
app.use(express.json())

const cors = require('cors');
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// connect to db

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST, user: process.env.MYSQL_USER, database: process.env.MYSQL_DATABASE, password: process.env.MYSQL_PASSWORD
});

app.get('/api/drinks', (req, res) => {
    connection.query('SELECT * FROM drinking_events', (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results);
    });
});

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
});