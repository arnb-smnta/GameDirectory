import React, { useEffect, useState } from "react";
import GamePosterList from "./GamePosterList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const gamelist = useSelector((appstore) => appstore.games.games);
  const [filteredlist, setfilterdlist] = useState(gamelist);
  const searchtext = useSelector((appstore) => appstore.search.Searchtext);
  //let filtercards = [];
  console.log(gamelist);

  console.log(searchtext);
  /*if (gamelist) {
    filtercards = gamelist.filter((game) =>
      game.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    console.log(filtercards);
    setfilterdlist(filtercards)
  }*/
  useEffect(() => {
    if (gamelist) {
      const filtercards = gamelist.filter((game) =>
        game.name.toLowerCase().includes(searchtext.toLowerCase())
      );
      setfilterdlist(filtercards);
    }
  }, [searchtext, gamelist]);
  console.log(filteredlist);
  return (
    <div className="relative z-10 mt-[-20%]">
      <GamePosterList gamelist={filteredlist} />
    </div>
  );
};

export default SecondaryContainer;
