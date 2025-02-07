require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const EXCHANGE_API_KEY = process.env.EXCHANGE_API_KEY;
const EXCHANGE_API_URL = `https://v6.exchangerate-api.com/v6/${EXCHANGE_API_KEY}/latest/`;

app.use(cors());
app.use(express.json());

app.get("/convert", async (req, res) => {
  const { from, to, amount } = req.query;

  if (!from || !to || !amount) {
    return res.status(400).json({ error: "Parâmetros obrigatórios não preenchidos! Gentileza revises as informações" });
  }

  try {
    const response = await axios.get(`${EXCHANGE_API_URL}${from.toUpperCase()}`);
    const rates = response.data.conversion_rates;

    if (!rates[to.toUpperCase()]) {
      return res.status(400).json({ error: "Moeda de destino não suportada!" });
    }

    const convertedAmount = parseFloat(amount) * rates[to.toUpperCase()];

    res.json({
      from: from.toUpperCase(),
      to: to.toUpperCase(),
      amount: parseFloat(amount),
      convertedAmount: convertedAmount.toFixed(2),
      rate: rates[to.toUpperCase()],
    });
  } catch (error) {
    res.status(500).json({
      error: "Erro ao obter taxas de cambio!",
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
