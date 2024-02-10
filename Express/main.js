import express from "express";
const app = express();
const host = "127.0.0.1";
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("Hello World!");
  res.status();
});

// app.get("/Home", (req, res) => {
//   res.send("Welcome World!");
// });

// app.get("/About", (req, res) => {
//   res.send("About us");
// });

// app.get("/Contact", (req, res) => {
//   res.send("Contact us");
// });

// http://127.0.0.1:3000/blog/shubham%20Deshmukh?region=in&theme=dark
// above query will produce the following output
app.get("/blog/:slug", (req, res) => {
  res.send(`Hello ${req.params.slug}!`);
  console.log(req.params); //{ slug: 'shubham Deshmukh' }
  console.log(req.query); //{ region: 'in', theme: 'dark' }
});

app.listen(port, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});
