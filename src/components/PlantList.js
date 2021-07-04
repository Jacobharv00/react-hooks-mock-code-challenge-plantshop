import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search}) {

  const filteredPlants = plants.filter((plant) => 
    plant.name.toLowerCase().includes(search.toLowerCase())
  )

  const plantsList = filteredPlants.map((plant) => {
    return(
      <PlantCard 
        key={plant.id}
        id={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}
      />
    )
  })

  return (
    <ul className="cards">{plantsList}</ul>
  )
}

export default PlantList
