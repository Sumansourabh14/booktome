const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="px-10 py-20 bg-zinc-900 text-white">
      <div className="flex justify-center">
        <p>booktome. | Copyright &copy; {year}</p>
      </div>
    </div>
  );
};

export default Footer;
