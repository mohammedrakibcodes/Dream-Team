import "./App.css";

import { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
// import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
// import Newsletter from "./components/Newsletter/Newsletter";
// import Footer from "./components/Footer/Footer";

const fetchPlayer = async () => {
  const res = await fetch("Data/players.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayer();

  return (
    <>
      <Navbar />
      <Hero />

      <Suspense
        fallback={
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        }
      >
        <AvailablePlayers playersPromise={playersPromise} />
      </Suspense>

      {/* <SelectedPlayers />
      <Newsletter />
      <Footer /> */}
    </>
  );
}

export default App;
