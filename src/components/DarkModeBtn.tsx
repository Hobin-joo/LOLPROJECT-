"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsCloudLightningRain, BsCloudLightningRainFill } from "react-icons/bs";

export const DarkModeBtn = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <BsCloudLightningRainFill size={35} />
      ) : (
        <BsCloudLightningRain size={35} />
      )}
    </button>
  );
};
