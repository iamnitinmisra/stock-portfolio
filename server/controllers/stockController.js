const axios = require("axios");
require("dotenv").config();

module.exports = {
  getSymbol: async (req, res) => {
    // const { symbol, region, language } = req.body
    let symbol = "NKE";
    let region = "US";
    let language = "en";
    const { APIKEY } = process.env;

    let headers = {
      headers: {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": APIKEY,
      },
    };

    const symbolData = await axios
      .get(
        `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=${region}&lang=${language}&symbol=${symbol}`,
        headers
      )
      .catch((err) => console.log(err));

    console.log(symbolData.data);
  },
};