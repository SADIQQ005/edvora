import React, { useState } from "react";
import moment from 'moment'
import Cards from "../components/Cards";
import { useAppContext } from "../context/state";

function past() {
  const { rides, owner } = useAppContext();

  const code = owner.station_code - 5;

  const filtered = rides.filter(found => {
    return found.station_path.includes(code)
  })


  return (
    <>
      {filtered &&
        filtered.map((ride, index) => <Cards key={index} ride={ride} />)}
    </>
  );
}

export default past;
