import { getItem } from "@/utils/champions";
import { getVersion } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const Item = async () => {
  const items = await getItem();
  const version = await getVersion();
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((p, index) => {
          return (
            <div
              key={index}
              className="group p-4 flex flex-col items-center text-center bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${p.image.full}`}
                alt="404"
                width={150}
                height={150}
                className="rounded-md border border-gray-700"
              />
              <h1 className="text-lg font-bold mt-4 group-hover:text-gray-300 transition-colors duration-300">
                {p.name}
              </h1>
              <p className="text-gray-400 mt-2">{p.plaintext}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Item;
