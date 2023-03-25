import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import About from "./About";
import SingleCocktail from "./SingleCocktail";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
