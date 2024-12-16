// "use server";

// import { Item } from "@/types/Item";

// export async function getItem(): Promise<Item[]> {
//   const Api = process.env.RIOT_API_KEY!;
//   const res = await fetch(
//     "https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/item.json",
//     {
//       method: "GET",
//       headers: {
//         "X-Riot-Token": Api,
//       },
//     }
//   );
//   const data = await res.json();
//   const newData: Item[] = Object.values(data.data);
//   return newData;
// }

// export const getSpellImgUrl = (version: string, spellImg: string) =>
//   `${API_URL}/cdn/${version}/img/spell/${spellImg}`;

// export const getPassiveImgUrl = (version: string, passiveImg: string) =>
//   `${API_URL}/cdn/${version}/img/passive/${passiveImg}`;
