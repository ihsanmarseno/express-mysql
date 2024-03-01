const dbPool = require("../config/database");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  return dbPool.execute(SQLQuery);
};

const createNewUsers = (body) => {
  const { nama, email, alamat } = body;
  const SQLQuery = `INSERT INTO users (nama, email, alamat) VALUES ('${nama}', '${email}', '${alamat}')`;
  return dbPool.execute(SQLQuery);
};

const updateUsers = (id, body) => {
  const { nama, email, alamat } = body;
  const SQLQuery = `UPDATE users SET nama = '${nama}', email = '${email}', alamat = '${alamat}' WHERE id = ${id}`;
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
