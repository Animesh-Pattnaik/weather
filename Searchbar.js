import React, { useState} from "react";
import Fetch from "./Fetch";

function Searchbar() {
  const [inputCity, setInputCity] = useState('');
  
  const handleChangeInput = (e) => {
    console.log("Value",e.target.value);
    setInputCity(e.target.value);
    console.log(inputCity);
  };

  const handleSearch = () => {
    <Fetch name={inputCity} />
  };

  return (
    <div className="searchbar">
      <form>
        <div className="search">
          <input
            type="search"
            className="form-control"
            placeholder="Search City.."
            aria-label="Search City.."
            value={inputCity}
            onChange={handleChangeInput}
            onKeyDown={handleSearch}
          />
          <div></div>
          <button
            type="submit"
            className="input-group-text"
            id="basic-addon"
            onClick={handleSearch}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Searchbar;
