//csr
"use client";

import React, { useEffect, useState } from "react";
import { Champions } from "@/types/Champions";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export default function RotationPage() {
  // const [data, setData] = useState<Champions[]>([]);

  const { data: data, isLoading } = useQuery({
    queryKey: ["rotation"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/api/rotation");
      const data: Champions[] = await res.json();
      return data;
    },
  });

  // useEffect(() => {
  //   async function getRotation() {
  //     const res = await fetch("http://localhost:3000/api/rotation");
  //     const data = await res.json();
  //     setData(data);
  //   }

  //   getRotation();
  // }, []);
  if (isLoading) <>"Loading..."</>;

  return (
    <div>
      <h1>챔피언 로테이션 (무료플레이 하기)</h1>
      <div>
        {data?.map((p) => {
          return (
            <div key={p.id}>
              <Link href={`/champions/${p.id}`}>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${p.image.full}`}
                  alt={p.name}
                />
                <h1>{p.name}</h1>
                <h2>{p.title}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
