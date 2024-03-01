const UsersModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data, fields] = await UsersModel.getAllUsers();
    res.status(200).json({
      message: "GET users success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewUsers = async (req, res) => {
  const { body } = req;

  if(body.nama === undefined || body.email === undefined || body.alamat === undefined) {
    return res.status(400).json({
      message: "Bad Request"
    })
  }

  try {
    await UsersModel.createNewUsers(body);
    res.status(201).json({
      message: "Create users success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateUsers = async (req, res) => {
  const { id } = req.params;
  try {
    await UsersModel.updateUsers(id, req.body);
    res.status(201).json({
      message: "Update users success",
      data: {
        id,
        ...req.body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteUsers = async (req, res) => {
  const { id } = req.params;

  try {
    await UsersModel.deleteUsers(id);
    res.status(200).json({
      message: "Delete users success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUsers,
  deleteUsers,
};
