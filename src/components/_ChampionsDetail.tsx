import { getDetail } from "@/utils/champions";
import { getVersion } from "@/utils/serverApi";
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
  const version = await getVersion();

  return (
    <div className="text-white flex flex-col items-center px-5">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
        alt={champion[id].name}
        fill
        className="object-cover"
      />
      <div className="rounded-lg shadow-lg p-6 w-full h-full z-10">
        <div className="flex flex-col items-center text-2xl font-bold text-subColor1 [text-shadow:_2px_2px_0_black]">
          <h2 className="text-4xl font-bold mt-4">{champion[id].name}</h2>
          <p className="italic text-gray-400">{champion[id].title}</p>
        </div>
        <div className="mt-6 text-gray-300 text-xl font-bold text-subColor1 [text-shadow:_2px_2px_0_black]">
          <h3 className="border-b border-gray-700 pb-2 text-center font-bold">
            챔피언 소개
          </h3>
          <p className="mt-2">{champion[id].blurb}</p>
        </div>
        <div className="mt-6 text-gray-300 text-xl font-bold">
          <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 text-center text-subColor1 [text-shadow:_2px_2px_0_black]">
            스탯
          </h3>
          <div className="grid grid-cols-2 gap-4 mt-4 text-2xl text-subColor1 [text-shadow:_2px_2px_0_black]">
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
        <div className="mt-6">
          <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 text-center">
            스킬
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {champion[id].spells.map((p, spellIndex) => (
              <div
                key={spellIndex}
                className="flex flex-col items-center bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${p.image.full}`}
                  alt={p.name}
                  width={50}
                  height={50}
                  className="rounded-lg border border-gray-700"
                />
                <h1 className="text-lg font-bold mt-2">{p.name}</h1>
                <p className="text-gray-400 text-sm text-center mt-2">
                  {p.description.replace(/<[^>]+>|&quot;/g, "")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionsDetail;
