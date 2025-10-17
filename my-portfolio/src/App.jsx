import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience"; // ✅ import Experience
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";
import Recommendations from "./pages/Recommendation";
import Services from "./pages/Services";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="App bg-white dark:bg-gray-900 transition-colors duration-500">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Certificates darkMode={darkMode} />
      <Recommendations darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default App;
