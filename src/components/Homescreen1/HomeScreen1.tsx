import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./style.css";
import Search from "../../assets/images/Search.png";
import background from "../../assets/images/backround.png";
import beagleLogo from "../../assets/images/beagleLogo.png";
import vector from "../../assets/images/vector.png";
import SearchBox from "../SearchBox/SearchBox";
import groupGraph from "../../assets/images/groupGraph.png";
import growthDecomp from "../../assets/images/growthDecomp.png";
import valueShare from "../../assets/images/valueShare.png";

const beagleLogoCss = {
  width: "250px",
  height: "90px",
};
const searchValues = {
  valueShareForDivision: "Value Share for Devision",
  valueShareByDivision: "Value Share by Devision",
  shareForDivision: "Share for Devision",
  shareByDivision: "Share by Devision",
  constributionForAtlanta: "Contribution for Atlanta by Channel",
};
function Homescreen1() {
  const [toRenderImage, setToRenderImage] = useState(groupGraph);
  const onValueChange = (currentValue: string) => {
    if (
      currentValue === searchValues.valueShareByDivision ||
      currentValue === searchValues.shareByDivision ||
      currentValue === searchValues.shareForDivision ||
      currentValue === searchValues.valueShareForDivision
    ) {
      setToRenderImage(valueShare);
    }
    if (currentValue === searchValues.constributionForAtlanta) {
      setToRenderImage(growthDecomp);
    }
  };
  return (
    <div
      className="pageContainer"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="beagleLogo">
        <img src={beagleLogo} alt="" style={beagleLogoCss} />
      </div>
      <div className="flzz">
        <SearchBox valueChanged={onValueChange} />
      </div>

      {/* <div className="recentSearches">
        <div className="text">
          <img className="recentSearchImg" src={Search} alt="" />
          <div>Recent Searches</div>
        </div>
      </div> */}
      <div className="bottom-half">
        <div className="bottom-half-left">
          <div className="bottom-half-heading">
            <div>
              <h1 style={{marginLeft: '10px'}}>Beagle Nudges</h1>
            </div>
            <div className="searchResults">
              <div className="showAllResults">
                <h3 className="h3Style">Show 2 out of 15</h3>
              </div>
              <div>
                <a className="linkStyle" href="">
                  <h3 className="h3Style2">Show all</h3>
                </a>
              </div>
            </div>
          </div>
          <div className="bottomRectangle">
            <div>
              <h3 className="h3Style3">RTD is lossing value share this month by -3.2%</h3>
            </div>
            <div className="groupGraph">
              <img src={toRenderImage} alt="" width={678} height={222} />
            </div>
          </div>
        </div>
        <div className="bottom-half-right">
          <h2>What's new</h2>
          <div className="parent-update-1">
            <div className="parent-child-left">
              <h2 className="child-update-1">Sales Data</h2>
              <h3 className="lastUpdate">Last Update on 17th Sep'22</h3>
            </div>
            <div className="parent-child-right">
              <img className="child-update-2" src={vector} alt="" />
              <h2 className="child-update-3">123</h2>
            </div>
          </div>
          <div className="parent-update-2">
            <div className="parent-child-left">
              <h2 className="child-update-1">Retail Data</h2>
              <h3 className="lastUpdate">Last Update on 1st Oct'22</h3>
            </div>
            <div className="parent-child-right">
              <img className="child-update-2" src={vector} alt="" />
              <h2 className="child-update-3">34</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homescreen1;
