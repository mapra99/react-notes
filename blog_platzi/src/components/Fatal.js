import React from 'react';

const Fatal = (props) => (
  <div className="center">
    <h1 className="rojo">
      Error de url
    </h1>
    <h2 className="rojo">
      {props.errorMessage}
    </h2>
  </div>
)

export default Fatal;
