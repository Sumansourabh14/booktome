"use client";
import { getAuthor } from "@/services/openLibraryApi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Author = () => {
  const [details, setDetails] = useState({});
  const path = usePathname();

  const id = path.split("/")[2];

  useEffect(() => {
    let mounted = true;
    const fetchAuthorDetails = async () => {
      const response = await getAuthor(id);

      if (mounted) {
        setDetails(response.data);
      }
    };

    fetchAuthorDetails();

    return () => {
      mounted = false;
    };
  }, [id]);

  // useEffect(() => {
  //   console.log(details);
  // }, [details]);

  return (
    <div>
      <div className="px-10 pt-24 lg:pt-36 pb-14 lg:pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-10 flex-col md:flex-row items-center md:items-start">
            <div>
              {!!details.photos && (
                <img
                  src={`https://covers.openlibrary.org/b/id/${details?.photos[0]}-L.jpg`}
                  className="w-[200px] lg:w-[260px]"
                  style={{ objectFit: "cover" }}
                  alt={details.title}
                />
              )}
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light">
                {details.name}
              </h1>
              {!!details.death_date && (
                <h2>
                  {details.birth_date} - {details.death_date}
                </h2>
              )}
              <p className="leading-7 max-w-[700px]">{details.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
