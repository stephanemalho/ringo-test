import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/pages/Home/Home";
import Error from "./components/pages/Error";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error />} />
    </Routes>
    </>
  );
}

export default App;
