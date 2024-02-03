const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="px-8 py-1 bg-black text-white font-dmSerifText tracking-wider text-lg hover:bg-slate-700"
    >
      {text}
    </button>
  );
};

export default Button;
