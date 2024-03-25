import { Route, Routes } from "react-router-dom";
import "./assets/styles/main.scss";
import NavBar from "./components/NavBar";
import ScrollTop from "./components/utils/ScrollTop";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import Details from "./pages/details/Details";
import NotFound from "./pages/errors/NotFound";

function App() {
  return (
    <div className="main">
      <ScrollTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
