import Image from "next/image";
import ConnectButton from "./Buttons/ConnectButton";

export default function Appbar() {
  return (
    <div className="h-20 border-b-2 border-white">
      <div className="flex flex-row justify-between items-center px-10 h-full">
        <a href="http://localhost:3000" className="flex items-center gap-x-14">
          <div className=" text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-600 text-transparent bg-clip-text">
            LiquidNFT
          </div>
        </a>

        <ConnectButton />
      </div>
    </div>
  );
}
