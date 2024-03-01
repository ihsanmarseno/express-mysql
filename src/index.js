const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const usersRoutes = require("./routes/users");
const middlewareLogRequest = require("./middleware/logs");
const upload = require("./middleware/multer");

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use("/assets", express.static("public/images"));

app.use("/users", usersRoutes);

app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "File uploaded successfully",
  });
});

// app.use((req, err, res) => {
//   res.json({
//     message: err,
//   });
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
