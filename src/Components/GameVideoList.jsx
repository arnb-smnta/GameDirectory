import React from "react";
import GameVideo from "./GameVideo";

const GameVideoList = ({ videodata }) => {
  return (
    <div>
      {videodata.map((video) => {
        return <GameVideo video={video} key={video.id} />;
      })}
    </div>
  );
};

export default GameVideoList;
