import Books from "@/components/bookComponents/Books";
import { endPoints } from "@/services/openLibraryEndPoints";
import React from "react";

const Browse = () => {
  return (
    <div className="py-24 px-8">
      <div className="max-w-[1500px] mx-auto">
        <h1 className="text-4xl">Browse</h1>
        <div className="flex flex-col gap-6 py-10">
          <Books url={endPoints.trendingBooks} title="Trending" />
          <Books url={endPoints.classicBooks} title="Classics" />
          <Books url={endPoints.sciFiBooks} title="Sci-Fi" />
        </div>
      </div>
    </div>
  );
};

export default Browse;
