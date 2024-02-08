import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center gap-8 pt-40 pb-24 bg-green-600 text-white">
      <h1 className="font-dmSerifText text-6xl md:text-7xl lg:text-8xl xl:text-[8rem]">
        booktome.
      </h1>
      <p className="text-xl font-light">Your personal library</p>
      <Link
        href={`/signup`}
        className="px-12 py-2 bg-black text-white font-dmSerifText tracking-wider text-xl hover:bg-slate-900"
      >
        Sign up
      </Link>
    </div>
  );
};

export default HeroSection;
