import React from "react";
import { useSearchParams } from "react-router-dom";

const GamePage = () => {
  const [searchParams] = useSearchParams();
  return <div>{searchParams.get("id")}</div>;
};

export default GamePage;
