import RowOfNineGridItems from "./RowOfNineGridItems";

const GridBoard = () => {
  const gridValues = [
    ["", "", "5", "", "8", "", "6", "3", ""],
    ["7", "6", "", "", "", "3", "", "", ""],
    ["", "", "", "5", "", "4", "", "1", ""],

    ["1", "4", "", "", "", "8", "", "", ""],
    ["6", "", "", "", "", "", "", "", "2"],
    ["", "", "", "1", "", "", "", "8", "6"],

    ["", "8", "", "7", "", "2", "", "", ""],
    ["", "", "", "4", "", "", "", "2", "3"],
    ["", "5", "4", "", "3", "", "7", "", ""],
  ];

  const gridBoardRows = gridValues.map((rowValues, index) => (
    <RowOfNineGridItems key={index} rowIndex={index} rowValues={rowValues} />
  ));

  return <div>{gridBoardRows}</div>;
};

export default GridBoard;
