import { getChampions } from "@/utils/champions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Champions = async () => {
  const champions = await getChampions();
  return (
    <>
      <div className="min-h-screen  text-white p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {champions.map((p) => {
            return (
              <Link
                href={`/champions/${p.id}`}
                key={p.id}
                className="group bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="p-4 flex flex-col items-center text-center">
                  <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${p.image.full}`}
                    alt={p.name}
                    width={150}
                    height={150}
                    className="rounded-md border border-gray-700"
                  />
                  <h1 className="text-lg font-bold mt-4 group-hover:text-gray-300 transition-colors duration-300">
                    {p.name}
                  </h1>
                  <p className="text-gray-400 mt-2">{p.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Champions;
