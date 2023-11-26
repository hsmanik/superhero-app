import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme == "dark" ? "bg-zinc-900" : null
        } h-screen`}
      >
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
