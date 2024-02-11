import express from "express";
const app = express();
const host = "127.0.0.1";
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("Get Request");
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log("Post request");
  res.send("Hello World Post");
});

app.listen(port, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});
