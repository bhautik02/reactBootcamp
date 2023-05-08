import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
// import AllQuotes from "./pages/AllQuotes";
// import QuoteDetails from "./pages/QuoteDetails";
// import NewQuote from "./pages/NewQuote";
// import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }>
        <Routes>
          <Route path="/" element={<Navigate to="/quotes"> </Navigate>}></Route>
          <Route path="/quotes" element={<AllQuotes />}></Route>
          <Route path="/quotes/:quoteId/*" element={<QuoteDetails />}></Route>
          <Route path="/new-quote" element={<NewQuote />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
