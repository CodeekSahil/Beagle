import { useEffect, useState } from "react";
import "./style.css";
import Search from "../../assets/images/Search.png";
var data = require("../../constants/mockData.json");

export default function SearchBox(props: any) {
  const [value, setValue] = useState("");
  const [borderColor, setBorderColor] = useState("white");

  const onChange = (input: string) => {
    setValue(input);
  };

  const onSearch = (searchTerm: string) => {
    setValue(searchTerm);
    
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  const changeBorderColor = () => {
    console.log("BORDER_COLOR", borderColor);
    setBorderColor("red");
  };

  const handleKeypress = (e: any) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      onSearch(value);
    }
  };

  useEffect(() => {
    props.valueChanged(value);
  },[value])

  return (
    <div className="SearchBox">
      <div className="search-container">
        <div className="search-inner">
          <div className="inputContainer">
            <input
              className="searchInputStyle" 
              type="text"
              value={value}
              onFocus={changeBorderColor}
              onChange={(event) => {
                onChange(event.target.value);
              }}
              onKeyPress={handleKeypress}
            />
            <div>
              <img
                className="searchIcon"
                src={Search}
                alt=""
                onClick={() => onSearch(value)}
              />
            </div>
          </div>
        </div>
        <div className="dropdown">
          {data
            .filter((item: any) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item: any) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
