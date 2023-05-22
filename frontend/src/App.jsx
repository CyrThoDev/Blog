import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";
import OneArticle from "./pages/OneArticle";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:id" element={<OneArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
