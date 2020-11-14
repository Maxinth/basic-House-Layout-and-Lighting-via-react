import React from "react";

function LightSwitch(props) {
  const {
    switchName,
    changeLights,
    status,
    all,
    bulbsLit,
    switchIndex,
  } = props;
  const statusText = status ? "  on" : "  off";
  const textTheme = status ? "on" : "";

  // conditionally rendering different button instances based on if the 'all' props is passed
  const buttonDisplay = all ? `${switchName}` : switchName;
  const msg = all ? `` : ` bulb is ${statusText}`;

  const atLeastOneBulbOn = (all) => {
    let allOn =
      all.kitchen || all.bathroom || all.livingRoom || all.bedroom
        ? "at-least-one"
        : "all-off";
    return allOn;
  };
  const btnClass = all
    ? `master-switch ${atLeastOneBulbOn(all)}`
    : "room-switch";

  return (
    <button
      className={`${btnClass} ${
        switchIndex === 2 || 0 ? "shiftRight" : "normal"
      }`}
      onClick={() => changeLights(switchName)}
    >
      {buttonDisplay}
      <div className={textTheme}> {msg}</div>
      <span className="bulbSpan">
        {bulbsLit ? (
          <span className="bulb-no">{bulbsLit === 4 ? "all" : bulbsLit}</span>
        ) : (
          ""
        )}
        <i className="fa fa-lightbulb-o"></i>
        {bulbsLit ? <span className="bulb-no right">On</span> : ""}
      </span>
    </button>
  );
}

export default LightSwitch;
