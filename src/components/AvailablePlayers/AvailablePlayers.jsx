import { use, useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

import PlayerCard from "./PlayerCard";
import spinnerIcon from "../../assets/system-regular-727-spinner-dashes-hover-rotation.json";

const AvailablePlayers = ({ playersPromise }) => {
  const players = use(playersPromise);

  const playerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      playerRef.current?.playFromBeginning();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="rounded-2xl lg:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 shadow-lg">
        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-center sm:text-left text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Available Players
          </h2>

          <div className="mx-auto sm:mx-0 flex items-center justify-center gap-2 rounded-full border border-lime-400 bg-gradient-to-r from-lime-300 to-yellow-300 px-5 py-2 shadow-md">
            <span className="font-bold tracking-wide text-slate-900">
              {players.length} Players
            </span>

            <Player ref={playerRef} icon={spinnerIcon} size={22} />
          </div>
        </div>

        <div className="mb-8 h-px w-full bg-linear-to-r from-transparent via-slate-300 to-transparent"></div>

        <PlayerCard players={players} />
      </div>
    </div>
  );
};

export default AvailablePlayers;
