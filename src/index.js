const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Dobrý den.");
});

app.get("/contact", (req, res) => {
  res.send("Gymnázium, Arabská 14, Praha 6.");
});

app.get("/about", (req, res) => {
  res.send("Prestižní stránka našeho Gymnázia.");
});

app.get("/hobbies", (req, res) => {
  res.send("Lezení do firendzone.");
});

app.get("/calc", (req, res) => {
  var formular = "<form action='/calc' method='post'>";
  formular += "<input type='text' name='num1' placeholder='První číslo'/>";
  formular += "<input type='text' name='num2' placeholder='Druhé číslo'/>";
  formular += "<button type='submit' name='submit'>Budiž</button>";
  formular += "</form>";
  res.send(formular);
});

app.get("/fibo/:n", (req, res) => {
  var n = Number(req.params.n);
  let x = 0;
  let y = 1;
  let z = 0;
  let result = "Posloupnost: 0 1 ";
  if (n < 2) {
    result = "Rada cisel musi mit vice cisel nez 2";
  }
  for (var i = 2; i < n; i++) {
    z = y + x;
    x = y;
    y = z;
    result += z + " ";
  }
  res.send(result);
});

app.post("/calc", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("Součet je: " + result);
});

app.listen(8080, () => {
  console.log("Server běží na portu 8080");
});
