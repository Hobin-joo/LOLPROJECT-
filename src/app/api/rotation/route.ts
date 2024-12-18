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
  const newChampions = champions?.filter((p) =>
    data.freeChampionIds.includes(Number(p.key))
  );
  return NextResponse.json(newChampions);
}

// 문제가 발생할 수 있는 코드
// const result = someArray.filter(item => item.includes('keyword'));

// // 수정된 코드
// const result = Array.isArray(someArray) ? someArray.filter(item => item.includes('keyword')) : [];
