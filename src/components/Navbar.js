import React from "react";

function Navbar() {
  const luxuryHomeOrBeans = [
    "https://ik.imagekit.io/lhmimages/lhm_listings/63137/706_04.jpg??tr=w-260,h-200",
    "https://cdn.winsightmedia.com/platform/files/public/2019-10/background/WatermelonBaked%20Beans%2C%201_1570717119.jpg?guNgzEg3n3tZtf5iEN8fOGsZY_CeLU1S"
  ];
  function getLuxuryHomeOrBeans() {
    return luxuryHomeOrBeans[Math.floor(Math.random() * 2)];
  }
  return (
    <div>
      <header className="header">
        <img src={getLuxuryHomeOrBeans()} alt="logo" className="lhob" />
        About Me!
      </header>
    </div>
  );
}

export default Navbar;
