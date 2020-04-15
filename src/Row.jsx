import React from 'react';
import Box from './Box.jsx';

function Row(props) {
  const row = props.row.map((button, i) =>
    <Box key={`row${row}col${i}`} val={button} row={props.curRow} col={i} onClick={(e) => props.onClick(props.curRow, i)} />
  );


  return (
    <div className="Row">
      {row}
    </div>
  );

}

export default Row;
