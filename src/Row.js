import Cell from "./Cell";

function Row({ term }) {
  return (
    <tr>
      <Cell content={term.english} />
      <Cell content={term.latvian} />
    </tr>
  );
}

export default Row;
