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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 15 }).map((_, index) => (
                <div
                  key={index}
                  className="card bg-base-100 border border-slate-200 shadow-sm"
                >
                  <div className="skeleton h-80 w-full"></div>

                  <div className="card-body">
                    <div className="skeleton h-6 w-3/4"></div>

                    <div className="flex justify-between">
                      <div className="skeleton h-4 w-24"></div>
                      <div className="skeleton h-8 w-20"></div>
                    </div>

                    <div className="skeleton h-px w-full"></div>

                    <div className="skeleton h-5 w-32"></div>

                    <div className="flex justify-between gap-4">
                      <div className="skeleton h-4 w-24"></div>
                      <div className="skeleton h-4 w-24"></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="skeleton h-5 w-20"></div>
                      <div className="skeleton h-10 w-32"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
