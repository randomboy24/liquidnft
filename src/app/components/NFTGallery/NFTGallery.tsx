"use client";
import { useContext } from "react";
import NFTCard from "./NFTCard";
import { NFTContext } from "@/app/contexts/NFTContext";

export default function NFTGallery() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 32, 24, 24, 2, 24, 24, 0];
  const { NFTs } = useContext(NFTContext);
  return (
    <div className="mt-6 grid xl:grid-cols-6 ml-8 gap-y-4 lg:grid-cols-4 grid-cols-2 sm:grid-cols-3 3xl:grid-cols-8 2xl:grid-cols-7">
      {NFTs.map((item, index) => {
        return <NFTCard key={index} image={item.image} />;
      })}
    </div>
  );
}
