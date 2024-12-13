import { getChampions } from "@/utils/champions";
import React from "react";

const Champions = async () => {
  const champions = await getChampions();
  return (
    <>
      <div>
        {champions.map((p) => {
          return (
            <div key={p.id}>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${p.image.full}`}
                alt={p.name}
              />
              <h1>{p.name}</h1>
              <br></br>
              <p>{p.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Champions;
