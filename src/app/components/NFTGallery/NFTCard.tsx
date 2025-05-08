import Image from "next/image";

export default function NFTCard() {
  return (
    <div className="border border-gray-600 h-72 w-50 rounded">
      <Image src={"/nft.png"} height={200} width={200} alt={"alt text"} />
      <div className="mx-2">
        <div className="mt-2 flex flex-row  items-center  ">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            width="20px"
            height="20px"
            viewBox="0 0 450 352.69"
          >
            <path
              d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"
              style={{ fill: "white" }}
            ></path>
            <path
              d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"
              style={{ fill: "white" }}
            ></path>
            <path
              d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"
              style={{ fill: "white" }}
            ></path>
          </svg>
          <span className="font-semibold">1,000</span>
        </div>

        <button className="mt-4 h-8 border w-full border-gray-400 text-black bg-green-300 hover:bg-gray-200 font-semibold text-xl hover:cursor-pointer hover:text-black">
          Swap
        </button>
      </div>
    </div>
  );
}
