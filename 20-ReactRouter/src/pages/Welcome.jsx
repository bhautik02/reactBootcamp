import { Route, Routes } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>This is Welcome Page...</h1>
      <Routes>
        <Route path="/new-user" element={<h1>New User</h1>}></Route>
      </Routes>
    </>
  );
};
export default Welcome;
