import { getDetail } from "@/utils/champions";
import Image from "next/image";
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
  console.log(champion);

  return (
    <div className=" text-white flex flex-col items-center py-10 px-5">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${[
          id,
        ]}_0.jpg`}
        alt={champion[id].name}
        fill
        className="object-cover"
      />
      <div className=" rounded-lg shadow-lg p-6 max-w-2xl w-full z-10">
        <div className="flex flex-col items-center [text-shadow:_2px_2px_0_black] text-2xl font-bold">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champion[id].image.full}`}
            alt={champion[id].name}
            width={300}
            height={300}
            className="rounded-lg border-2 border-gray-700"
          />
          <h2 className="text-2xl font-bold mt-4 ">{champion[id].name}</h2>
          <p className="italic text-gray-400">{champion[id].title}</p>
        </div>
        <div className="mt-6 text-subColor1 [text-shadow:_2px_2px_0_black] text-2x1">
          <h3 className="text-xl border-b border-gray-700 pb-2 text-center font-bold">
            챔피언 소개
          </h3>
          <p className="mt-2 text-gray-300 text-4x1 font-bold">
            {champion[id].blurb}
          </p>
        </div>
        <div className="mt-6 text-subColor1 [text-shadow:_2px_2px_0_black] text-1xl font-bold">
          <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 text-center">
            스탯
          </h3>
          <div className="grid grid-cols-2 gap-4 mt-4 text-gray-300">
            <div>
              <h4 className="font-medium">공격력:</h4>
              <p>{champion[id].info.attack}</p>
            </div>
            <div>
              <h4 className="font-medium">방어력:</h4>
              <p>{champion[id].info.defense}</p>
            </div>
            <div>
              <h4 className="font-medium">마법력:</h4>
              <p>{champion[id].info.magic}</p>
            </div>
            <div>
              <h4 className="font-medium">난이도:</h4>
              <p>{champion[id].info.difficulty}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionsDetail;
