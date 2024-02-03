const BigButton = ({ text }) => {
  return (
    <button className="px-12 py-2 bg-black text-white font-dmSerifText tracking-wider text-xl hover:bg-slate-900">
      {text}
    </button>
  );
};

export default BigButton;
