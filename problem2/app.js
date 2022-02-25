const express = require("express");
const app = express();

const KEYWORDS = ["bonfire", "cardio", "case", "character", "bonsai"];

const getPrefix = (keyword) => {
  let keywords = KEYWORDS.concat().sort(),
    i = 0;

  keywords.forEach((data) => {
    if ((data[i] = keyword[i])) {
      i++;
    }
  });
  return keyword.substr(0, i - 1);
};

app.get("/prefixes", (req, res) => {
  const keyWords = req.query.keywords.split(",");
  const response = [];
  keyWords.forEach((key) => {
    if (!KEYWORDS.includes(key)) {
      response.push({
        keyword: key,
        status: "not_found",
        prefix: "not_applicable",
      });
    } else {
      response.push({
        keyword: key,
        status: "found",
        prefix: getPrefix(key),
      });
    }
  });
  res.send(response);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
