import React, { useState } from "react";
import axios from "axios";

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BRL");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConvert = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(`http://localhost:3000/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`);
      setConvertedAmount(response.data.convertedAmount);
    } catch (err) {
      setError("Erro ao converter. Verifique os valores.");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h2>Conversor de Moeda</h2>
      <div style={styles.form}>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} style={styles.input} />
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} style={styles.select}>
          <option value="USD">USD</option>
          <option value="BRL">BRL</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
        </select>
        <span style={styles.arrow}>➡</span>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} style={styles.select}>
          <option value="USD">USD</option>
          <option value="BRL">BRL</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
        </select>
        <button onClick={handleConvert} style={styles.button} disabled={loading}>
          {loading ? "Convertendo..." : "Converter"}
        </button>
      </div>
      {convertedAmount !== null && (
        <h3 style={styles.result}>
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </h3>
      )}
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

const styles = {
  container: { textAlign: "center", fontFamily: "Arial, sans-serif", padding: 20 },
  form: { display: "flex", gap: "10px", justifyContent: "center", alignItems: "center" },
  input: { padding: "5px", width: "80px", textAlign: "center" },
  select: { padding: "5px" },
  arrow: { fontSize: "20px" },
  button: { padding: "5px 10px", cursor: "pointer", border: "none", backgroundColor: "#007bff", color: "white" },
  result: { marginTop: "20px", fontSize: "20px" },
  error: { color: "red", marginTop: "10px" },
};

export default CurrencyConverter;
