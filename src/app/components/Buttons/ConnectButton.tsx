"use client";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";

export default function ConnectButton() {
  const [isClient, setIsClient] = useState(false);
  const wallet = useWallet();
  const { connection } = useConnection();

  useEffect(() => {
    setIsClient(true);
  }, []);

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
