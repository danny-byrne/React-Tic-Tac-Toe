import React from 'react';


function Box(props) {
  return (
    // <div className="Box">
    <button col={props.col} row={props.row} className="XO" onClick={props.onClick}>
      {props.val}
    </button>
    //</div>
  );
}

export default Box;
