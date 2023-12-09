import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { ThemeContext } from "./context/ThemeContext";
import { useAxios } from "./context/useAxios";

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);

  const { response, isLoading, error, fetchData } =
    useAxios(`/all?fields=name`);
  console.log("response:", response);

  const val = {
    response,
    isLoading,
    error,
    fetchData,
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, val }}>
      <div
        className={`${theme} ${
          theme == "dark" ? "bg-zinc-950" : "bg-zinc-200"
        } min-h-screen`}
      >
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
