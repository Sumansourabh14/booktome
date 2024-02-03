import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="font-dmSerifText text-8xl">booktome.</h1>
      <h2 className="text-xl">Get started</h2>
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
