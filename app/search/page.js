"use client";
import { GlobalContext } from "@/services/globalContext";
import { useContext, useEffect, useState } from "react";
import data from "../../config/searchData.json";
import SearchInput from "@/components/inputComponents/SearchInput";
import { useSearchParams } from "next/navigation";

const Search = () => {
  const [result, setResult] = useState([]);
  const { searchLoading, searchOpenLibrary } = useContext(GlobalContext);

  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;

  const encodedSearchQuery = encodeURI(searchQuery || "");
  console.log(encodedSearchQuery);

  useEffect(() => {
    const searchData = async () => {
      const response = await searchOpenLibrary(encodedSearchQuery);

      if (response.data.docs) {
        setResult(response.data.docs.slice(0, 20));
      }
    };

    searchData();
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
    <div className="">
      <div className="px-10 py-20 bg-gray-100">
        <h1 className="text-5xl font-dmSerifText font-bold text-center mb-10">
          Search booktome
        </h1>
        <SearchInput />
      </div>

      {searchLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}

      {/* {!!work && (
        <div>
          {work.map((book) => (
            <div key={book.key}>
              <p>{book.title}</p>
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                style={{
                  width: "100px",
                  objectFit: "cover",
                }}
                alt={`cover image of ${book.title}`}
              />
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Search;
