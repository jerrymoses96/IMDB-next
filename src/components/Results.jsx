import React from "react";

const Results = ({ results }) => {
  return (
    <div>
      {results.map((item) => (
        <div key={item.id}>
          <h1>{item.original_title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Results;
