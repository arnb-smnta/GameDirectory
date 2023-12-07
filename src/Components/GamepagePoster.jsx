import React from "react";

const GamepagePoster = ({ shots, video = null }) => {
  return (
    <div className="mx-auto my-4 w-[80%] ">
      {video ? (
        <video className="h-[100%] w-[100%] rounded-lg" controls>
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img
          key={shots.id}
          src={shots.image}
          alt={shots.id}
          className="h-[100%] w-[100%] rounded-lg"
        ></img>
      )}
    </div>
  );
};

export default GamepagePoster;
