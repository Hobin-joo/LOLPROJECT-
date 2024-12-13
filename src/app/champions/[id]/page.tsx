import ChampionsDetail from "@/components/_ChampionsDetail";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const DetailPage = ({ params }: Props) => {
  return <ChampionsDetail params={params} />;
};

export default DetailPage;
