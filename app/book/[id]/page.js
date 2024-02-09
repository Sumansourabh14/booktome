"use client";
import { getBookDetailsApi, getResourceApi } from "@/services/openLibraryApi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BookDetails = () => {
  const [details, setDetails] = useState({});
  const [authorResource, setAuthorResource] = useState("");
  const [author, setAuthor] = useState("");

  const path = usePathname();
  const id = path.split("/")[2];

  useEffect(() => {
    let mounted = true;
    const searchData = async () => {
      const response = await getBookDetailsApi(id);

      if (mounted) {
        setDetails(response.data);
        setAuthorResource(response.data.authors[0].author.key);
      }
    };

    searchData();

    return () => {
      mounted = false;
    };
  }, [id]);

  useEffect(() => {
    let mounted = true;
    const fetchAuthor = async () => {
      const response = await getResourceApi(authorResource);

      if (mounted) {
        setAuthor(response?.data.name);
      }
    };

    fetchAuthor();

    return () => {
      mounted = false;
    };
  }, [authorResource]);

  useEffect(() => {
    console.log(details, author);
  }, [details, author]);

  return (
    <div>
      <div className="px-10 pt-24 lg:pt-36 pb-14 lg:pb-20">
        <div className="max-w-[1200px] m-auto">
          <div className="flex gap-10 flex-col md:flex-row items-center md:items-start">
            <div>
              {!!details.covers && (
                <img
                  src={`https://covers.openlibrary.org/b/id/${details?.covers[0]}-L.jpg`}
                  className="w-[200px] lg:w-[250px]"
                  style={{ objectFit: "cover" }}
                  alt={details.title}
                />
              )}
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light">
                {details.title}
              </h1>
              {!!author && (
                <p className="text-lg md:text-xl font-medium md:font-semibold">
                  {author}
                </p>
              )}
              <p className="leading-7 max-w-[700px]">{details.description}</p>
              {details?.first_publish_date && (
                <p className="text-gray-700">
                  First published in {details.first_publish_date}
                </p>
              )}
              {details?.subject_people && (
                <div className="flex flex-col gap-2">
                  <h3>Characters</h3>
                  <div>
                    {details.subject_people.map((people, index) => (
                      <span key={people}>
                        {people}
                        {index === details.subject_people.length - 1
                          ? ``
                          : `, `}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {/* {details?.links &&
                details?.links[0].title.includes("Wikipedia") && (
                  <div>
                    <Link
                      href={details.links[0].url}
                      target="_blank"
                      className="underline hover:underline-offset-4"
                    >
                      Wikipedia
                    </Link>
                  </div>
                )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
