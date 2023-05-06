import { Route, Routes, useParams, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../libs/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetails = () => {
  const params = useParams();
  const location = useLocation();
  const {
    sendRequest,
    data: loadedData,
    error,
    status,
  } = useHttp(getSingleQuote, true);

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

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

  const qoute = location.pathname.split("/")[1];
  const currentUrl = location.pathname === `/${qoute}/${params.quoteId}`;

  if (status === "completed" && !loadedData) {
    return (
      <h2 className="centered" style={{ color: "red" }}>
        No Quote Found with this ID!!!
      </h2>
    );
  }
  // console.log(loadedData);

  return (
    <>
      {/* <h1>Welcome to QuoteDetails</h1>
      <h2>{params.quoteId}</h2> */}
      <HighlightedQuote author={loadedData.author} text={loadedData.text} />
      <Routes>
        <Route path="/comments" element={<Comments />}></Route>
      </Routes>
      {currentUrl && (
        <div className="centered">
          <Link className="btn--flat" to={`${location.pathname}/comments`}>
            Load a Comment
          </Link>
        </div>
      )}
    </>
  );
};
export default QuoteDetails;
