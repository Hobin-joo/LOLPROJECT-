"use server";

import { Champions } from "@/types/Champions";
import { Detail } from "@/types/Detail";
import { Item } from "@/types/Item";

// 챔피언 목록록
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

// 디테일 페이지 챔피언언
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
// 아이템

export async function getItem(): Promise<Item[]> {
  const Api = process.env.RIOT_API_KEY!;
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/item.json",
    {
      method: "GET",
      headers: {
        "X-Riot-Token": Api,
      },
    }
  );
  const data = await res.json();
  const newData: Item[] = Object.values(data.data);
  return newData;
}

// 디테일페이지 스킬 가져오기

export async function getDetailSpells(id: string): Promise<Detail> {
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
