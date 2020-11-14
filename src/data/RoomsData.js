const rooms = ["kitchen", "bathroom", "livingRoom", "bedroom"];

// allOn function - are all bulbs on
const allOn = (lightState) => {
  return (
    lightState.kitchen &&
    lightState.bathroom &&
    lightState.livingRoom &&
    lightState.bedroom
  );
};

//number of bulbs on
const onBulbs = (lightState) => {
  return (
    lightState.kitchen +
    lightState.bathroom +
    lightState.livingRoom +
    lightState.bedroom
  );
};

export { onBulbs, allOn };
export default rooms;
