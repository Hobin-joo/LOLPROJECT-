import { getDetail } from "@/utils/champions";
import React from "react";
//ssr

type Props = {
  params: {
    id: string;
  };
};

const ChampionsDetail = async ({ params }: Props) => {
  const { id } = params;
  const champion = await getDetail(id);
  console.log("====================================================");
  console.log(champion);
  return (
    <>
      <div>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champion[id].image.full}`}
          alt={champion[id].name}
        />
        <h2>{champion[id].name}</h2>
        <br></br>
        <p>{champion[id].title}</p>
        <br></br>
        <p>{champion[id].blurb}</p>
        <br></br>
        <h1>스탯</h1>
        <h2>공격력:{champion[id].info.attack}</h2>
        <h2>방어력:{champion[id].info.defense}</h2>
        <h2>마법력:{champion[id].info.magic}</h2>
        <h2>난이도:{champion[id].info.difficulty}</h2>
      </div>
    </>
  );
};

export default ChampionsDetail;
