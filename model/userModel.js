const db = require('../db');

const getAllUsers = callback => {
  db.query('SELECT * FROM users', callback);
};

const getUserById = (id, callback) => {
  db.query('SELECT * FROM users WHERE id = ?', [id], callback);
};

const createUser = (data, callback) => {
  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [data.name, data.email], callback);
};

const updateUser = (id, data, callback) => {
  db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [data.name, data.email, id], callback);
};

const deleteUser = (id, callback) => {
  db.query('DELETE FROM users WHERE id = ?', [id], callback);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
