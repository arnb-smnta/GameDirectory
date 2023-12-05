import React from "react";

const VideoBackground = () => {
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/eOrb93UZfPU?si=csyvS8c9uXN1MMuy?&autoplay=1&loop=100&mute=1&modestbranding=1&controls=0&rel=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
