const express = require("express");
const app = express();
const port = process.env.PORT;
app.use(express.static("./client/public"));

app.listen(port, err => {
  if (err) {
    console.log(`app is not listening due to the following error: ${err}`);
  } else {
    console.log(`app listening on port ${port}`);
  }
});
