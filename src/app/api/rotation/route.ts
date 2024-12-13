// 서버 컴포넌트를 쓰려고할때 nextresponses

import { ChampionRotation } from "@/types/ChampionRotation";
import { getChampions } from "@/utils/champions";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const Api = process.env.RIOT_API_KEY!;
  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      method: "GET",
      headers: {
        "X-Riot-Token": Api,
      },
    }
  );
  const data: ChampionRotation = await res.json();
  const champions = await getChampions();
  console.log(champions);
  const newChampions = champions.filter((p) =>
    data.freeChampionIds.includes(Number(p.key))
  );
  console.log(data);
  console.log(newChampions);
  return NextResponse.json(newChampions);
}
