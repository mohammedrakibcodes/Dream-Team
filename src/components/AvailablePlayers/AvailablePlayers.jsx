import React, { use } from "react";

const AvailablePlayers = ({ playersPromise }) => {
  console.log(playersPromise);
  const data = use(playersPromise);
  console.log(data);
  return <div>Players: {data.length}</div>;
};

export default AvailablePlayers;
