"use server";

import { Champions } from "@/types/Champions";

export async function getChampions(): Promise<Champions[]> {
  const Api = process.env.RIOT_API_KEY!;
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion.json",
    {
      next: {
        revalidate: 10000,
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

//18번째 배열맞는지 체크하고 위에서
