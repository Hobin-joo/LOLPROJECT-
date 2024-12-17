//isr

import Champions from "@/components/_Champions";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "챔피언",
  description: "설명",
};

const ChampionsPage = async () => {
  return <Champions />;
};

export default ChampionsPage;
