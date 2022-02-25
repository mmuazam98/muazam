const { default: axios } = require("axios");
const express = require("express");
const app = express();

app.get("/numbers", async (req, res) => {
  const urls = req.query.url;
  try {
    const response = await axios.all(urls.map((url) => axios.get(url)));
    const data = response.map((res) => res.data.numbers);
    let result = [].concat(...data);
    result.sort(function (a, b) {
      return a - b;
    });
    result = new Set(result);
    res.send({ numbers: [...result] });
  } catch (error) {
    res.send(`Error occupied. ${error.config.url} returned 404 status.`);
  }
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
