import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const sidebarToggleHandler = () => {
    setToggleSidebar((prev) => !prev);
  };

  useEffect(() => {
    const fetchAPIData = async () => {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Fetched from cached data");
        return;
      }
      localStorage.clear();

      try {
        const response = await fetch(url);
        const apiData = await response.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        console.log("Fetched from API today");
        setData(apiData);
      } catch (err) {
        console.log("error", err.message);
      }
    };

    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {toggleSidebar && (
        <SideBar data={data} onSidebarToggle={sidebarToggleHandler} />
      )}
      {data && <Footer data={data} onSidebarToggle={sidebarToggleHandler} />}
    </>
  );
}

export default App;
