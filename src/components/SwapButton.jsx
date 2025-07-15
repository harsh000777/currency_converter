/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SwapButton = ({ onClick }) => (
  <button type="button" onClick={onClick} className="text-blue-600 hover:text-blue-800 transition">
    <FontAwesomeIcon icon={faArrowRightArrowLeft} className="text-2xl mt-6" />
  </button>
);

export default SwapButton;
