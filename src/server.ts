import express from "express";
import handleLogin from "./fetch/login";
const app = express();
const port = 3000;

app.use(express.json());
app.get("/login", (req, res) => {
  console.log("Login started");
  handleLogin();
  res.send("Login end");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
