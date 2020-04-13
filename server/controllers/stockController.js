// const axios = require('axios')
require('dotenv').config()  

module.exports = {
    getSymbol: async (req, res) => {
        const { symbol, region, language } = req.body

        const { APIKEY } = process.env
        
        let config = {
            headers: {
                'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
                'x-rapidapi-key': APIKEY
            }
        }

        const symbolData = await axios.get(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=${region}&lang=${language}&symbol=${symbol}`, config)

        console.log(symbolData)
    }

}