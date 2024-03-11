"use client";
import { getBooksByCategoriesApi } from "@/services/openLibraryApi";
import { OPEN_LIBRARY_COVER_API_URL } from "@/services/openLibraryEndPoints";
import { useEffect, useState } from "react";

const Books = ({ title, url }) => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchBooks = async () => {
      const response = await getBooksByCategoriesApi(url);

      if (mounted) {
        setBooks(response.data.works);
      }
    };

    fetchBooks();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      {!!books ? (
        <div>
          <h2 className="mb-4 text-xl">{title}</h2>
          <div className="flex gap-2">
            {books.map((book) => (
              <div key={book.key} className="flex flex-col gap-2 w-[300px]">
                <img
                  src={`${OPEN_LIBRARY_COVER_API_URL}/${
                    book?.cover_id || book?.cover_i
                  }-L.jpg`}
                  className="h-[220px]"
                  style={{ objectFit: "cover" }}
                  alt={book.title}
                />
                <h3 className="font-semibold">{book.title}</h3>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-zinc-200 shadow rounded-md p-6 max-w-full w-full mx-auto">
          <div className="animate-pulse flex gap-6">
            <div className="bg-zinc-400 max-w-36 w-full rounded-md py-28"></div>
            <div className="bg-zinc-400 max-w-36 w-full rounded-md py-28"></div>
            <div className="bg-zinc-400 max-w-36 w-full rounded-md py-28"></div>
            <div className="bg-zinc-400 max-w-36 w-full rounded-md py-28"></div>
            <div className="bg-zinc-400 max-w-36 w-full rounded-md py-28"></div>
            <div className="bg-zinc-400 max-w-36 w-full rounded-md py-28"></div>
            <div className="bg-zinc-400 max-w-36 w-full rounded-md py-28"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;
