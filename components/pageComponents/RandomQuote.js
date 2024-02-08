import useQuote from "@/utils/useQuote";

export const RandomQuote = () => {
  const quote = useQuote();

  return (
    !!quote && (
      <div className="py-20 flex flex-col gap-4 md:gap-6 items-center text-center">
        <p className="text-xl md:text-3xl font-extralight leading-7 md:leading-10 max-w-[75%]">
          {quote.quote}
        </p>
        <p className="font-dmSerifText text-lg md:text-xl">
          - {quote.author}, {quote.book}
        </p>
      </div>
    )
  );
};
