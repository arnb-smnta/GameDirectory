import React, { useEffect } from "react";
import GamePosterList from "./GamePosterList";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import genreupdate from "./helpers/genreupdate";

const GenrePage = () => {
  const dispatch = useDispatch();
  const genredata = useSelector((appstore) => appstore.games.gamegenre);
  useEffect(() => {
    if (!genredata) genreupdate(dispatch);
  }, []);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  let filtereddata = [];
  if (genredata) {
    filtereddata = genredata.filter((genre) => genre.id === parseInt(id, 10));
  }
  return (
    <div>
      <h1>{searchParams.get("id")}</h1>
      {filtereddata.length ? (
        <GamePosterList gamelist={filtereddata[0].games} />
      ) : null}
    </div>
  );
};

export default GenrePage;
