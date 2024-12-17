//csr
"use client";

import React from "react";
import { Champions } from "@/types/Champions";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function RotationPage() {
  const { data: data, isLoading } = useQuery({
    queryKey: ["rotation"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/api/rotation");
      const data: Champions[] = await res.json();
      return data;
    },
  });

  if (isLoading) <>"Loading..."</>;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-8">
        챔피언 로테이션 (무료플레이 하기)
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {data?.map((p) => {
          return (
            <div
              key={p.id}
              className="group p-4 flex flex-col items-center text-center bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <Link href={`/champions/${p.id}`}>
                <div className="p-4 flex flex-col items-center">
                  <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${p.image.full}`}
                    alt={p.name}
                    width={150}
                    height={150}
                    className="rounded-md border border-gray-700"
                  />
                  <h1 className="text-xl font-semibold mt-4">{p.name}</h1>
                  <h2 className="text-gray-400 mt-1 text-sm">{p.title}</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
