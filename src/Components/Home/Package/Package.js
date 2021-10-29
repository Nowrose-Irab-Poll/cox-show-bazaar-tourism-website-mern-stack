import React from "react";

const Package = ({ pack }) => {
  const { name, description, img, price } = pack;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Package;
