"use server";

export async function getVersion(): Promise<string[]> {
  const Api = process.env.RIOT_API_KEY!;
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
    {
      method: "GET",
      headers: {
        "X-Riot-Token": Api,
      },
    }
  );
  const version = await res.json();
  return version[0];
}

// 서버액션 방법이 따로있음
