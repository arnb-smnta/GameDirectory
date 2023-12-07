import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <video className="h-[100%] w-[100%] rounded-lg" controls>
        <source
          src="https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default HomePage;
