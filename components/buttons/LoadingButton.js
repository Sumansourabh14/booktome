import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingButton = ({ text, loading }) => {
  return (
    <button
      type="submit"
      className="flex items-center gap-2 px-8 py-1 bg-black text-white font-dmSerifText tracking-wider text-lg hover:bg-slate-700"
    >
      <span>{text}</span>
      {loading && <FontAwesomeIcon icon={faSpinner} className="animate-spin" />}
    </button>
  );
};

export default LoadingButton;
