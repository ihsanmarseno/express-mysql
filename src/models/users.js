const dbPool = require("../config/database");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  return dbPool.execute(SQLQuery);
};

const createNewUsers = (body) => {
  const { name, email, alamat } = body;
  const SQLQuery = `INSERT INTO users (name, email, alamat) VALUES ('${name}', '${email}', '${alamat}')`;
  return dbPool.execute(SQLQuery);
};

const updateUsers = (id, body) => {
  const { name, email, alamat } = body;
  const SQLQuery = `UPDATE users SET name = '${name}', email = '${email}', alamat = '${alamat}' WHERE id = ${id}`;
  return dbPool.execute(SQLQuery);
};

const deleteUsers = (id) => {
  const SQLQuery = `DELETE FROM users WHERE id = ${id}`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUsers,
  deleteUsers
};
