import { useState, useEffect } from "react";
import AmountInput from "./AmountInput";
import CurrencySelect from "./CurrencySelect";
import SwapButton from "./SwapButton";
import ResultBox from "./ResultBox";

const Home = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState("");
  const [rateInfo, setRateInfo] = useState("");

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount)) {
      setResult("Please enter a valid amount.");
      return;
    }

    try {
      const res = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`,
      );
      const data = await res.json();
      const rate = data.rates[toCurrency];
      const converted = (amount * rate).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${converted} ${toCurrency}`);
    } catch (err) {
      setResult("Error fetching exchange rate.");
    }
  };

  useEffect(() => {
    const fetchRate = async () => {
      if (fromCurrency === toCurrency) {
        setRateInfo(`1 ${fromCurrency} = 1 ${toCurrency}`);
        return;
      }
      try {
        const res = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`,
        );
        const data = await res.json();
        const rate = data.rates[toCurrency];
        setRateInfo(`1 ${fromCurrency} = ${rate} ${toCurrency}`);
      } catch (err) {
        setRateInfo("Error fetching rate");
      }
    };
    fetchRate();
  }, [fromCurrency, toCurrency]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#2c3e50] to-[#4ca1af] px-4 text-white">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/10 p-8 shadow-xl backdrop-blur-md">
        <h2 className="mb-6 text-center text-3xl font-bold tracking-wide text-white">
          🌍 Currency Converter
        </h2>

        <form onSubmit={handleSubmit}>
          <AmountInput amount={amount} setAmount={setAmount} />

          <div className="mt-6 flex items-center justify-between">
            <CurrencySelect
              label="From"
              value={fromCurrency}
              onChange={setFromCurrency}
            />
            <SwapButton onClick={handleSwap} />
            <CurrencySelect
              label="To"
              value={toCurrency}
              onChange={setToCurrency}
            />
          </div>

          <ResultBox rateInfo={rateInfo} result={result} />

          <button
            type="submit"
            className="h-12 w-full rounded-xl bg-blue-500 text-lg font-semibold text-white transition duration-200 hover:bg-blue-600"
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
