import { useState } from "react";

const GridItem = ({ cellValue, rowIndex, columnIndex }) => {
  // item should have a state to track its current value and its correct value

  const [inputValue, setInputValue] = useState(cellValue);

  const handleInputChange = (event) => {
    const value = event.target.value;
    const lastCharacter = value.slice(-1);

    const isNumber = Number.isInteger(Number(lastCharacter));
    const isEmptyString = value === "";

    if ((isNumber && lastCharacter > 0) || isEmptyString)
      setInputValue(lastCharacter);
  };

  const cellBackgroundColor =
    (rowIndex < 3 && columnIndex < 3) ||
    (rowIndex < 3 && columnIndex > 5) ||
    (rowIndex > 2 && rowIndex < 6 && columnIndex > 2 && columnIndex < 6) ||
    (rowIndex > 5 && columnIndex < 3) ||
    (rowIndex > 5 && columnIndex > 5)
      ? "bg-gray-900 bg-opacity-75"
      : "bg-blue-900 bg-opacity-75";

  const cellText = !!cellValue
    ? "text-white font-bold"
    : "text-gray-300 italic";
  return (
    <input
      className={`text-white box-border h-16 w-16 p-4 border-2 border-black text-center ${cellBackgroundColor} ${cellText}`}
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      disabled={!!cellValue}
    />
  );
};

export default GridItem;
