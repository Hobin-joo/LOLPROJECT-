//ssg
import Item from "@/components/_Item";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "아이템",
  description: "설명",
};

export default function ItemsPage() {
  return <Item />;
}
