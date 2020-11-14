import React, { useState } from "react";
import rooms from "../../data/RoomsData";
import { allOn, onBulbs } from "../../data/RoomsData";
import Room from "./Room";
import LightSwitch from "./LightSwitch";

const HouseLayout = () => {
  const [lightState, setLight] = useState({
    kitchen: false,
    bathroom: false,
    livingRoom: false,
    bedroom: false,
  });

  let allLightsStatus = allOn(lightState) ? "all-on" : "some-on";

  const changeLightState = (room) => {
    setLight({ ...lightState, [`${room}`]: !lightState[room] });
  };

  const allAtOnce = () => {
    let allRoomsStatus;
    // if all on / all off / some are on and others off, toggle the states
    if (allOn(lightState) || !allOn(lightState)) {
      allRoomsStatus = {
        kitchen: !lightState.kitchen,
        bathroom: !lightState.bathroom,
        livingRoom: !lightState.livingRoom,
        bedroom: !lightState.bedroom,
      };
    }

    setLight(allRoomsStatus);
  };
  return (
    <div className="house">
      <div className={`layout ${allLightsStatus}`}>
        {rooms.map((room) => (
          <Room key={room} roomName={room} status={lightState[room]} />
        ))}
      </div>
      <section className="allSwitches">
        <div className="switches">
          {rooms.map((room, index) => (
            <LightSwitch
              key={room}
              switchName={room}
              switchIndex={index}
              changeLights={changeLightState}
              status={lightState[room]}
            />
          ))}
        </div>
        <div className="switches">
          {/* Master Toogle */}
          <LightSwitch
            all={lightState}
            changeLights={allAtOnce}
            switchName="Master Toggle Switch/Counter"
            bulbsLit={onBulbs(lightState)}
          />
        </div>
      </section>
    </div>
  );
};

export default HouseLayout;
