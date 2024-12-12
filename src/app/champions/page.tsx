//isr

import { getChampions } from "@/utils/champions";
import React from "react";

const ChampionsPage = async () => {
  const data = await getChampions();
  console.log(data);
  return <div>ChampionsPage</div>;
};

export default ChampionsPage;
