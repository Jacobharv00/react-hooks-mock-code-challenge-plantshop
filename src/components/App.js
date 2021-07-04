import { useState, useEffect } from "react"
import Header from "./Header"
import PlantPage from "./PlantPage"

function App() {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(data => setPlants(data))
  }, [])

  function handleNewPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

return (
    <div className="app">
      <Header />
      <PlantPage 
        handleNewPlant={handleNewPlant}
        plants={plants}
      />
    </div>
  );
}

export default App
