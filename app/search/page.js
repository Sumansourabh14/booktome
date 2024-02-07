"use client";
import SearchInput from "@/components/inputComponents/SearchInput";
import { suggestions } from "@/content/searchContent";
import { GlobalContext } from "@/services/globalContext";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import data from "../../config/searchData.json";
import Image from "next/image";

const Search = () => {
  const [result, setResult] = useState([]);
  const { searchLoading, searchOpenLibrary } = useContext(GlobalContext);

  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;

  const encodedSearchQuery = encodeURI(searchQuery || "");

  useEffect(() => {
    let mounted = true;
    setResult([]);
    const searchData = async () => {
      const response = await searchOpenLibrary(encodedSearchQuery);

      if (response.data.docs) {
        setResult(response.data.docs.slice(0, 20));
      }
    };

    searchData();

    return () => {
      mounted = false;
    };
  }, [encodedSearchQuery]);

  useEffect(() => {
    console.log(result);
  }, [result]);

  // const { docs } = data;
  // const work = docs.slice(0, 20);

  // useEffect(() => {
  //   console.log(work);
  // }, [work]);

  return (
    <div>
      <div className="px-10 py-20 bg-gray-100">
        <h1 className="text-5xl font-dmSerifText font-bold text-center mb-10">
          Search booktome
        </h1>
        <SearchInput />
      </div>

      <div className="px-8">
        <div className="flex flex-col items-center py-4">
          <h3 className="text-lg font-bold mb-2">Suggestions</h3>
          <ul className="flex justify-center gap-4">
            {suggestions.map((suggestion) => (
              <li key={suggestion.id}>
                <Link href={`/search?q=${encodeURI(suggestion.bookName)}`}>
                  {suggestion.bookName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {searchLoading && (
          <div>
            <p>Loading...</p>
          </div>
        )}

        {!!result && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 py-8">
            {result.map((book) => (
              <div key={book.key} className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  style={{
                    width: "120px",
                    objectFit: "cover",
                  }}
                  alt={`cover image of ${book.title}`}
                />
                {/* <div
                  style={{
                    width: "120px",
                    height: "180px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={`cover image of ${book.title}`}
                  />
                </div> */}
                <div className="flex flex-col gap-2">
                  <p className="font-light text-xl">{book.title}</p>
                  {book?.author_name && (
                    <p className="font-light font-dmSerifText">
                      {book?.author_name[0]}
                    </p>
                  )}
                  <p>{book.ratings_average}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
