
const db = require('../db');

exports.getAllUsers = callback => {
  db.query('SELECT * FROM users', callback);
};

exports.getUserById = (id, callback) => {
  db.query('SELECT * FROM users WHERE id = ?', [id], callback);
};

exports.createUser = (data, callback) => {
  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [data.name, data.email], callback);
};

exports.updateUser = (id, data, callback) => {
  db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [data.name, data.email, id], callback);
};

exports.deleteUser = (id, callback) => {
  db.query('DELETE FROM users WHERE id = ?', [id], callback);
};
