import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getRandomNumber as getRandomDimension } from "./utilities/Functions.js";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";
import useFetchedData from "./Hooks/useFetchedData";

const LIMIT = 126;

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target.newLocation.value) return;

    const newCurrenLocation = e.target.newLocation.value;
    fetchedDimension(newCurrenLocation);
    e.target.newLocation.value = "";
  };

  const fetchedDimension = (idLocation) => {
    const URL = `https://rickandmortyapi.com/api/location/${idLocation}`;

    axios
      .get(URL)
      .then(({ data }) => setCurrentLocation(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const randomDimension = getRandomDimension(LIMIT);
    fetchedDimension(randomDimension);
  }, []);

  /*   const { data, loading, error } = useFetchedData(
    "https://rickandmortyapi.com/api/character/41",
    LIMIT
  );
 */

  return (
    <main className="main">
      <div className="vortice">
        <img className="vortice-img" src="/images/vortice.png" alt="" />
        <img className="name-img" src="/images/name.png" alt="name" />
        <img className="ellipse-img" src="/images/ellipse.png" alt="" />
      </div>

      {currentLocation && (
        <>
          <LocationForm LIMIT={LIMIT} handleSubmit={handleSubmit} />
          <LocationInfo currentLocation={currentLocation} />
          <ResidentList residents={currentLocation.residents} />
        </>
      )}
    </main>
  );
}

export default App;
