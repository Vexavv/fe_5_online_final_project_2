import React, { useState, useEffect } from "react";

function Item({ item }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div>
      <a href='/page'>
        <img
          src={
            hovered === item._id && item.imageUrls.length > 1
              ? item.imageUrls[1]
              : item.imageUrls[0]
          }
          onMouseLeave={() => setHovered(null)}
          onMouseEnter={() => setHovered(item._id)}
          alt=''
        />
        <h3>{item.name}</h3>
        <p>
          <s>${item.previousPrice}</s> ${item.currentPrice}
        </p>
      </a>
    </div>
  );
}

export default Item;
