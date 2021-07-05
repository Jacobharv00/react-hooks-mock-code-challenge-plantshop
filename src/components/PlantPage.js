import { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, handleNewPlant}) {
  const [search, setSearch] = useState('')

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/>
      <Search setSearch={setSearch}/>
      <PlantList 
        plants={plants}
        search={search}
      />
    </main>
  )
}

export default PlantPage
