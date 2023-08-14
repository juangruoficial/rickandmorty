import "./styles/LocationInfo.css";
const LocationInfo = ({ currentLocation }) => {
  return (
    <section className="location-info">
      <h2 className="location-name">{currentLocation.name}</h2>
      <ul className="wrapper-info-location">
        <li>
          <b>Type:</b> {currentLocation.type}
        </li>
        <li>
          <b>Dimension: </b>
          {currentLocation.dimension}
        </li>
        <li>
          <b>Population: </b>
          {currentLocation.residents.length}
        </li>
      </ul>
    </section>
  );
};
export default LocationInfo;
