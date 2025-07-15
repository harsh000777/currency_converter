/* eslint-disable react/prop-types */
const ResultBox = ({ rateInfo, result }) => (
  <>
    <div className="mt-6 text-center text-base italic text-slate-200">
      {typeof rateInfo === "string" ? rateInfo : ""}
    </div>
    <div className="mb-4 mt-2 text-center text-lg font-medium text-white">
      {typeof result === "string" ? result : ""}
    </div>
  </>
);

export default ResultBox;
