const mysql = require('mysql2');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, 
  port: process.env.DB_PORT || 3306 
});

// The port is the network endpoint used to connect to your MySQL server. It allows your 
// application to talk to the database over a specific communication channel.

// 📌 Key Points:
// Default MySQL port is 3306.

// If MySQL is running on a custom port (e.g., in Docker, remote servers), your app won’t 
// connect without specifying the correct port.

// Helps avoid conflicts when multiple services are running on the same host.

connection.connect(err => {
  if (err) throw err;
  console.log('✅ MySQL Connected');
});

module.exports = connection;
