"use server";
import { Champions } from "@/types/Champions";

export async function getChampions() {
  const Api = process.env.RIOT_API_KEY!;
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion.json",
    {
      method: "GET",
      headers: {
        "X-Riot-Token": Api,
      },
    }
  );
  const data: Champions = await res.json();
  return data;
}
