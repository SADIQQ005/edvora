import React, { useState } from "react";
import Cards from "../components/Cards";
import { useAppContext } from "../context/state";

function Home() {
    const { rides, owner } = useAppContext();
    const code = owner.station_code;

    const filtered = rides.filter(found => {
        return found.station_path.includes(code)
    })

    let disCal

    filtered.map(e => {
        return disCal = e.station_path[0]
    })

    const distance = code - disCal 


    return (
        <>
            {filtered &&
                filtered.map((ride, index) => <Cards key={index} distance={distance} ride={ride} />)}
        </>
    );
}

export default Home;
