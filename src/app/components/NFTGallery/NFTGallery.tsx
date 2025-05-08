import NFTCard from "./NFTCard";

export default function NFTGallery() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 32, 24, 24, 2, 24, 24, 0];

  return (
    <div className="mt-6 grid grid-cols-8 ml-8 gap-y-4">
      {array.map((item, index) => {
        return <NFTCard key={index} />;
      })}
    </div>
  );
  <NFTCard />;
}
