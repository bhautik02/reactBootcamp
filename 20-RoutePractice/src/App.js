import { Navigate, Route, Routes } from "react-router";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes"> </Navigate>}></Route>
        <Route path="/quotes" element={<AllQuotes />}></Route>
        <Route path="/quotes/:quoteId/*" element={<QuoteDetails />}></Route>
        <Route path="/new-quote" element={<NewQuote />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
