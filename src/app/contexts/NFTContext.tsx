"use client";
import { createContext, SetStateAction, useState } from "react";

interface NFTContextType {
  NFTs: NFTType[];
  setNFTs: React.Dispatch<SetStateAction<any[]>>;
}

interface NFTType {
  name: string;
  symbol?: string;
  mintAddress: string;
  image: string;
  description?: string;
  collection?: string;
  owner: string;
  //   attributes:any[]
}

export const NFTContext = createContext<NFTContextType>({
  NFTs: [],
  setNFTs: () => {},
});

export default function NFTProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [NFTs, setNFTs] = useState<NFTType[]>([]);
  return (
    <NFTContext.Provider value={{ NFTs, setNFTs }}>
      {children}
    </NFTContext.Provider>
  );
}
