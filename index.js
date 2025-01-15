const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const router = require("./routes/routes");
require("./database/database");

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/api', router);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});