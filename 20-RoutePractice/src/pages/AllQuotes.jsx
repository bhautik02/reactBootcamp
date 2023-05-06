import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../libs/api";

// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "Bhautik",
//     text: "Learning React is Fun!",
//   },
//   {
//     id: "q2",
//     author: "Bhautik Jani",
//     text: "Learning React is Awesome!",
//   },
//   {
//     id: "q3",
//     author: "Bhautik Ashvinbhai Jani",
//     text: "Learning React is Great!",
//   },
// ];

const AllQuotes = () => {
  const {
    sendRequest,
    data: loadedQuotes,
    status,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};
export default AllQuotes;
