import express from "express";
import bodyParser from "body-parser";

import aboutRouter from "./routes/about.js";
import convertRouter from "./routes/convert.js";

const PORT = 3001;
const HOST_NAME = "localhost";

const app = express();
app.use(express.static("client"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/convert", convertRouter);
app.use("/about", aboutRouter);

app.listen(PORT, HOST_NAME, () => {
  console.log(`Server running at ${HOST_NAME}:${PORT}`);
});
