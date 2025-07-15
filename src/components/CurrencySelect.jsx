/* eslint-disable react/prop-types */
const getFlagCode = (currency) => {
  const map = {
    USD: "US",
    INR: "IN",
    AUD: "AU",
    GBP: "GB",
    JPY: "JP",
    CAD: "CA",
    AED: "AE",
    CNY: "CN",
    SGD: "SG",
    KRW: "KR",
  };
  return map[currency] || "US";
};

const CurrencySelect = ({ label, value, onChange }) => (
  <div>
    <p className="text-sm text-white">{label}</p>
    <div className="flex items-center gap-2 rounded-xl border border-slate-300 px-2 py-1">
      <img
        src={`https://flagsapi.com/${getFlagCode(value)}/flat/64.png`}
        className="w-6"
      />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-16 bg-transparent pl-2 pr-1 text-slate-800 outline-none"
      >
        <option value="USD">US</option>
        <option value="INR">IND</option>
        <option value="AUD">AUS</option>
        <option value="GBP">UK</option>
        <option value="JPY">JP</option>
        <option value="CAD">CAD</option>
        <option value="AED">UAE</option>
        <option value="CNY">CN</option>
        <option value="SGD">SG</option>
        <option value="KRW">KR</option>
      </select>
    </div>
  </div>
);

export default CurrencySelect;
