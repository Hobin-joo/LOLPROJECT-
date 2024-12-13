"use server";

import { Champions } from "@/types/Champions";
import { Detail } from "@/types/Detail";

export async function getChampions(): Promise<Champions[]> {
  const Api = process.env.RIOT_API_KEY!;
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion.json",
    {
      next: {
        revalidate: 86400,
      },
      method: "GET",
      headers: {
        "X-Riot-Token": Api,
      },
    }
  );
  const data = await res.json();
  const newData: Champions[] = Object.values(data.data);
  return newData;
}

export async function getDetail(id: string): Promise<Detail> {
  const Api = process.env.RIOT_API_KEY!;
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion/${id}.json`,
    {
      method: "GET",
      headers: {
        "X-Riot-Token": Api,
      },
    }
  );
  const data = await res.json();
  const newData: Detail = data.data;
  return newData;
}
//18번째 배열맞는지 체크하고 위에서
