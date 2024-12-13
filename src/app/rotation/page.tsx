//csr
"use client";

import React, { useEffect, useState } from "react";
import { Champions } from "@/types/Champions";

export default function RotationPage() {
  const [data, setData] = useState<Champions[]>([]);

  useEffect(() => {
    async function getRotation() {
      const res = await fetch("http://localhost:3000/api/rotation");
      const data = await res.json(); // 로테이션 챔피언들 id 번호 (key)
      setData(data);
    }

    getRotation();
  }, []);
  console.log(data);

  return <div>{data[0]?.id}</div>;
}
