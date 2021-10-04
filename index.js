"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./src/config");
// const studentRoutes = require("./routes/student-routes");
const customersRoutes = require("./src/routes/customers.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", customersRoutes.routes);

app.listen(config.port, () =>
  console.log("http://localhost:" + config.port + "/api/v1")
);
