import ChampionsDetail from "@/components/_ChampionsDetail";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `챔피언 ${params.id}에 대한 설명`,
    description: "설명",
  };
}

const DetailPage = ({ params }: Props) => {
  return <ChampionsDetail params={params} />;
};

export default DetailPage;
