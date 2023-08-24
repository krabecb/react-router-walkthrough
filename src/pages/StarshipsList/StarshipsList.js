import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StarshipsList = (props) => {

    const [ships, setShips] = useState([])

    const fetchShips = async () => {
        try {

            const response = await fetch('https://swapi.dev/api/starships/')
            const shipData = await response.json()
            setShips(shipData.results)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchShips()
    }, [])

    const loaded = () => {
        return(
            <div className="starships-list">
                {ships.map((ship) => {

                    let { name, url } = ship;
                    let path = url.split("/")
                    const id = path[path.length - 2]

                    return (
                        <Link to={`/ships/${id}`} key={id}>
                            <h2>{name}</h2>
                        </Link>
                    );
                })}
            </div>
        )
    }

    const loading = () => {
        return (<h1>Loading...</h1>);
    };

    return (
        <div className="starships-list">
            <section>{ships.length ? loaded() : loading()}</section>
        </div>
    );
};

export default StarshipsList;