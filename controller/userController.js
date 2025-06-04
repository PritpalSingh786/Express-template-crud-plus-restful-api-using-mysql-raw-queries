
const userModel = require('../model/userModel');

exports.showAllUsers = (req, res) => {
  userModel.getAllUsers((err, users) => {
    if (err) throw err;
    res.render('index.njk', { users });
  });
};

exports.createUserForm = (req, res) => {
  res.render('create.njk');
};

exports.saveUser = (req, res) => {
  userModel.createUser(req.body, err => {
    if (err) throw err;
    res.redirect('/');
  });
};

exports.editUserForm = (req, res) => {
  userModel.getUserById(req.params.id, (err, results) => {
    if (err) throw err;
    res.render('edit.njk', { user: results[0] });
  });
};

exports.updateUser = (req, res) => {
  userModel.updateUser(req.params.id, req.body, err => {
    if (err) throw err;
    res.redirect('/');
  });
};

exports.deleteUser = (req, res) => {
  userModel.deleteUser(req.params.id, err => {
    if (err) throw err;
    res.redirect('/');
  });
};
