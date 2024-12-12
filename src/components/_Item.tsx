import { getItem } from "@/utils/Item";
import React from "react";

const Item = async () => {
  const items = await getItem();
  return (
    <div>
      <div>
        {items.map((p, _) => {
          return (
            <div key={_}>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${p.image.full}`}
                alt="404"
              />
              <h1>{p.name}</h1>
              <p>{p.plaintext}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Item;
