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
        <h1>{champion.name}</h1>
        {/* <img
          src={`https://ddragon.leagueoflegendcs.com/cdn/14.24.1/img/champion/${champion.image}`}
          alt={champion.name}
        />
        <h2>{champion.name}</h2>
        <br></br>
        <p>{champion.title}</p>
        <br></br>
        <p>{champion.blurb}</p>
        <br></br>
        <h1>스탯</h1>
        <h2>공격력:{champion.info.attack}</h2>
        <h2>방어력:{champion.info.defense}</h2>
        <h2>마법력:{champion.info.magic}</h2>
        <h2>난이도:{champion.info.difficulty}</h2> */}
      </div>
    </>
  );
};

export default ChampionsDetail;
