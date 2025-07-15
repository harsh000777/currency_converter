/* eslint-disable react/prop-types */
const AmountInput = ({ amount, setAmount }) => (
  <div>
    <label htmlFor="amount" className="mb-1 block font-semibold text-slate-200">
      Enter Amount
    </label>
    <input
      id="amount"
      type="text"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      placeholder="e.g. 100"
      className="h-12 w-full rounded-xl border border-slate-300 px-4 text-base text-slate-800 outline-none transition focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

export default AmountInput;
