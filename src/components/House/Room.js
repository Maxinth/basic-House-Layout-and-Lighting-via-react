import React from "react";

const Room = ({ roomName, status }) => {
  const lightControls = status === true ? "light-on" : "light-off";
  return <div className={`room ${lightControls}`}>{roomName}</div>;
};

export default Room;
