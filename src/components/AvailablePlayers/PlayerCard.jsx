import { useRef } from "react";
import { Player } from "@lordicon/react";
import { FaRegUser } from "react-icons/fa";
import { IoFlagOutline } from "react-icons/io5";

import checkIcon from "../../assets/system-regular-31-check-hover-pinch.json";

const PlayerCard = ({ players }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => {
          return <SinglePlayerCard key={player.id} player={player} />;
        })}
      </div>
    </div>
  );
};

const SinglePlayerCard = ({ player }) => {
  const playerRef = useRef(null);

  const handleClick = () => {
    playerRef.current?.playFromBeginning();

    // later:
    // choose player logic
  };

  return (
    <div className="card bg-base-100 shadow-sm border border-slate-200">
      <figure>
        <img
          src={player.playerImage}
          alt={player.playerName}
          className="w-full h-130 object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          <FaRegUser />
          {player.playerName}
        </h2>

        <div className="flex justify-between gap-2 items-center">
          <div className="flex gap-2 items-center">
            <IoFlagOutline />
            <p>{player.playerCountry}</p>
          </div>

          <button className="btn btn-sm">{player.playerType}</button>
        </div>

        <div className="divider my-1"></div>

        <h2 className="font-bold">Rating: ⭐ {player.playerRating}</h2>

        <div className="flex justify-between gap-4 font-bold text-sm">
          <p>{player.battingStyle}</p>
          <p className="text-right">{player.bowlingStyle}</p>
        </div>

        <div className="card-actions justify-between items-center">
          <p className="font-semibold">Price: ${player.playerPrice}</p>
          <button onClick={handleClick} className="btn">
            Choose Player
            <Player ref={playerRef} icon={checkIcon} size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
