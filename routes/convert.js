import express from "express";
import https from "https";

const convertRoute = express.Router();

convertRoute.get("/", (req, res) => {
  res.sendFile(__dirname, +"index.html");
});

convertRoute.post("/", (req, res) => {
  const cur1 = req.body.cur1;
  const amt = req.body.amt;
  const cur2 = req.body.cur2;

  const url = "https://api.frankfurter.app/latest";
  https.get(url, (response) => {
    response.on("data", (chunk) => {
      const responseData = JSON.parse(chunk);
      const rate1 = responseData.rates[cur1];
      const rate2 = responseData.rates[cur2];
      res.write(`rate1: ${rate1}/EUR and rate2: ${rate2}/EUR\n`);
      res.write(`The converted amount is ${(rate2 / rate1) * amt}\n`);
      res.send();
    });
  });
});
export default convertRoute;
