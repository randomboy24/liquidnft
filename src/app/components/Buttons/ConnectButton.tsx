"use client";

import { NFTContext } from "@/app/contexts/NFTContext";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PublicKey } from "@solana/web3.js";
import { useContext, useEffect, useState } from "react";

export default function ConnectButton() {
  const [isClient, setIsClient] = useState(false);
  const wallet = useWallet();
  //   const { connection } = useConnection();
  const { NFTs, setNFTs } = useContext(NFTContext);
  useEffect(() => {
    setIsClient(true);
    async function fetchNFTs() {
      console.log("api key = " + process.env.NEXT_PUBLIC_HELIUS_API_KEY);
      const response = await fetch(
        `https://devnet.helius-rpc.com/?api-key=${process.env.NEXT_PUBLIC_HELIUS_API_KEY}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: "my-id",
            method: "getAssetsByOwner",
            params: {
              ownerAddress: "mdaoxg4DVGptU4WSpzGyVpK3zqsgn7Qzx5XNgWTcEA2",
              page: 1,
              limit: 1000,
              displayOptions: {
                showCollectionMetadata: true,
              },
            },
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      console.log(data.result.items[0].content.links.image);
      setNFTs(() => {
        return data.result.items.map((item: any) => {
          return {
            name: item.content.metadata.name,
            symbol: item.content.metadata.symbol,
            owner: item.ownership.owner,
            image: item.content.links.image,
            description: item.content.metadata.description,
          };
        });
      });
    }
    console.log(JSON.stringify(NFTs));
    fetchNFTs();
  }, [wallet.connected]);

  if (!isClient) {
    return "";
  }

  //   console.log(connection.getBalance(wallet.publicKey as PublicKey));
  return (
    <div>
      {/* <button
        className="h-10 w-36 rounded-lg bg-[#8EE3FB] text-sm text-black font-semibold hover:cursor-pointer hover:bg-[#61D8F9]"
        onClick={() => {
          wallet.connected ? wallet.disconnect() : wallet.connect();
        }}
      >
        {wallet.connected ? "disconnect" : "CONNECT WALLET"}
      </button> */}
      <WalletMultiButton />
      <div></div>
    </div>
  );
}
