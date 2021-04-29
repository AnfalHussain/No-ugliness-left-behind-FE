import GridItem from "./GridItem";

const RowOfNineGridItems = ({ rowValues, rowIndex }) => {
  const rowOfItems = rowValues.map((cellValue, columnIndex) => (
    <GridItem key={`cell[${rowIndex}][${columnIndex}]`} cellValue={cellValue} />
  ));

  return <div className="flex justify-center">{rowOfItems}</div>;
};

export default RowOfNineGridItems;
