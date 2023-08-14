import { useEffect, useState } from "react";
import "./styles/LocationForm.css";
const LocationForm = ({ LIMIT, handleSubmit }) => {
  const [animate, setAnimate] = useState(false);
  const welcomeMessage = "Welcome to rick Universe lets have some fun";

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <header className="wrapper-form">
      <h3 className="welcome-text">
        {welcomeMessage.split("").map((char, charIndex) => (
          <span
            key={charIndex}
            className={`letter ${animate ? "appear" : ""}`}
            style={{ animationDelay: `${charIndex * 80}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h3>

      <form className="form" onSubmit={handleSubmit}>
        <input
          min={1}
          max={LIMIT}
          type="number"
          placeholder="type an id location (1 - 126)..."
          id="newLocation"
          className="form-input"
        ></input>
        <button className="form-button">
          <p>Search</p>
          <img
            className="icons search-icon"
            src="/images/searchicon.png"
            alt=""
          />
        </button>
      </form>
    </header>
  );
};
export default LocationForm;
