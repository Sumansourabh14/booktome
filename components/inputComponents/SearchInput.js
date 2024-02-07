import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const search = useSearchParams()?.get("q");
  const [query, setQuery] = useState(search || "");
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();

    const encodeSearch = encodeURI(query || "");

    router.push(`/search?q=${encodeSearch}`);
  };

  useEffect(() => {
    console.log(search, query);
  }, []);

  return (
    <form onSubmit={handleSearch}>
      <div className="flex justify-center text-black">
        <input
          placeholder="What are you looking for?"
          value={query || ""}
          onChange={(e) => setQuery(e.target.value)}
          className="px-5 py-1 w-2/3 sm:w-2/5 sm:px-5 sm:py-3 text-zinc-200 bg-zinc-800 focus:bg-black rounded-lg focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400"
        />
      </div>
    </form>
  );
};

export default SearchInput;
