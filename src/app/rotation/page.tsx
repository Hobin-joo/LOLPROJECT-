//csr
"use client";


import React, { useEffect, useState } from "react";
import { ChampionRotation } from "@/types/ChampionRotation";

export default function RotationPage() {
  const [data, setData] = useState<ChampionRotation>();
  useEffect(() => {
    async function getRotation() {
      const res = await fetch("http://localhost:3000/api/rotation");
      const data = await res.json();
      setData(data);
    }
    getRotation();
  }, []);
  console.log(data);

  return <div>map</div>;
}
