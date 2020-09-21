import React from 'react';

const HelloWorld = () => {
  const hello = "Hello World!";
  const isTrue = true;

  return (
    <div className="hello-world">
      <h1>{hello}</h1>
      <h2>React esential course</h2>
      <img src="https://arepa.s3.amazonaws.com/react.png" />
      {isTrue ? <h4>This is true</h4> : <h5>I'm false</h5>}
      {isTrue && <h4>I'm true</h4>}
    </div>
  )
}

export default HelloWorld;
