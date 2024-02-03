import BigButton from "../buttons/BigButton";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="font-dmSerifText text-8xl">booktome.</h1>
      <h2 className="text-xl">Get started</h2>
      <BigButton />
    </div>
  );
};

export default HeroSection;
