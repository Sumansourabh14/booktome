import { getReciteQuoteApi } from "@/services/globalApi";
import { useEffect, useState } from "react";

const useQuote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchQuote = async () => {
      const response = await getReciteQuoteApi();
      // console.log(response);

      if (response) {
        setQuote(response.data);
      }
    };

    fetchQuote();

    return () => {
      mounted = false;
    };
  }, []);

  return quote;
};

export default useQuote;
