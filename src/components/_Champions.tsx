import { getChampions } from "@/utils/champions";
import React from "react";

const Champions = async () => {
  const champions = await getChampions();
  console.log(champions);
  return (
    <>
      <div>
        {champions.map((p) => {
          return (
            <div key={p.id}>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${p.image.full}`}
                alt="error 404"
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
