import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import DeveloperDetail from "./pages/DeveloperDetail";
import Company from "./pages/Company";
import CompanyDetail from "./pages/CompanyDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies/" element={<Company />} />
        <Route path="/:username" element={<DeveloperDetail />} />
        <Route path="company/:username" element={<CompanyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
