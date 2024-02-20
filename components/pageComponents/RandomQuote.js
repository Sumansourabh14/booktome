import useQuote from "@/utils/useQuote";

export const RandomQuote = () => {
  const quote = useQuote();

  return (
    <div className="py-20 bg-zinc-100">
      {quote ? (
        <div className="flex flex-col gap-4 md:gap-6 items-center text-center">
          <p className="text-xl md:text-3xl font-light leading-7 md:leading-10 max-w-[75%]">
            {quote.quote}
          </p>
          <p className="font-dmSerifText text-lg md:text-xl px-14">
            - {quote.author}, {quote.book}
          </p>
        </div>
      ) : (
        <div>
          <div className="shadow animate-pulse rounded-md p-6 max-w-xl w-full mx-auto bg-slate-300"></div>
          <div className="shadow animate-pulse rounded-md p-4 max-w-sm w-full mx-auto bg-slate-500 mt-4"></div>
        </div>
      )}
    </div>
  );
};
