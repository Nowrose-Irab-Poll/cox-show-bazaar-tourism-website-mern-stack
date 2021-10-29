import React, { useEffect, useState } from "react";
import Package from "../Package/Package";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("./packages.json")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
      });
  }, []);

  return (
    <div>
      <h2>Packages: {packages.length}</h2>
      {packages.map((p) => (
        <Package pack={p}></Package>
      ))}
    </div>
  );
};

export default Packages;
