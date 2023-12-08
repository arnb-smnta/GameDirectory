import React from "react";

const GameVideo = ({ video }) => {
  return (
    <div className="mx-auto my-4 w-[80%] border border-red-600">
      {" "}
      <video className="h-[100%] w-[100%] rounded-lg" controls autoPlay muted>
        <source src={video.data.max} type="video/mp4" />
      </video>
    </div>
  );
};

export default GameVideo;
