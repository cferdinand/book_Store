const express = require("express");
const app = express();
const port = process.env.PORT;
const routes = require("./routes/index.js");

app.use(express.static("./client/public"));

app.use("/", routes);

app.listen(port, err => {
  if (err) {
    console.log(`app is not listening due to the following error: ${err}`);
  } else {
    console.log(`app listening on port ${port}`);
  }
});
