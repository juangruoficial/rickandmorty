import { useEffect, useState } from "react";
import "./styles/LocationForm.css";
const LocationForm = ({
  LIMIT,
  handleSubmit,
  selectedValue,
  handleInputChange,
  isHovered,
}) => {
  const [animate, setAnimate] = useState(false);
  const welcomeMessage = "Welcome to rick Universe,lets have some fun";

  const colorLetter = isHovered ? "blueletter" : "letter";

  return (
    <header className="wrapper-form">
      <h3 className="welcome-text">
        {welcomeMessage.split("").map((char, charIndex) => (
          <span
            key={charIndex}
            className={`letter ${animate ? "appear" : ""} ${colorLetter}`}
            style={{ animationDelay: `${charIndex * 80}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h3>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-input">
          <input
            min={1}
            max={LIMIT}
            type="number"
            placeholder="type an id location (1 - 126)..."
            id="newLocation"
            className="form-input input-number"
          ></input>

          <button className="form-button">
            <p>Search</p>
            <img
              className="icons search-icon"
              src="/images/searchicon.png"
              alt=""
            />
          </button>
        </div>

        <p className="range-slicer">Or slide a dimennsion</p>
        <div className="range-input">
          <input
            min={1}
            max={LIMIT}
            type="range"
            value={selectedValue}
            onChange={handleInputChange}
            className="form-input range-input custom-slider"
          />
          ID location {selectedValue}
        </div>
      </form>
    </header>
  );
};
export default LocationForm;
