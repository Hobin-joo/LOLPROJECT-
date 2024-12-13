import { getChampions } from "@/utils/champions";
import Link from "next/link";
import React from "react";

const Champions = async () => {
  const champions = await getChampions();
  return (
    <>
      <div>
        {champions.map((p, _) => {
          return (
            <Link href={`/champions/${p.id}`}>
              <div key={_}>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${p.image.full}`}
                  alt={p.name}
                />
                <h1>{p.name}</h1>
                <br></br>
                <p>{p.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Champions;
