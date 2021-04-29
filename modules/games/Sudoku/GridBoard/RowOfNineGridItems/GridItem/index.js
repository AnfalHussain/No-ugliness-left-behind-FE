const GridItem = ({ cellValue }) => {
  // item should have a state to track it's current value and it's correct value
  return (
    <input
      className="box-border h-16 w-16 p-4 border-2"
      type="text"
      value={cellValue}
    />
  );
};

export default GridItem;
