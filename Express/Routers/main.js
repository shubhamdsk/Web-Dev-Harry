import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Express World !");
});
const start = async () => {};
try {
  app.listen(PORT, () => {
    console.log(`${PORT} Yes i'm connected`);
  });
} catch (error) {
  console.log(error);
}
start();
