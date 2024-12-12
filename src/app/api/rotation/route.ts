import { ChampionRotation } from "@/types/ChampionRotation";
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
  return NextResponse.json(data);
}
