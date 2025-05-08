import Appbar from "./components/Appbar";
import NFTGallery from "./components/NFTGallery/NFTGallery";
export default function Home() {
  return (
    <div className="text-white">
      <Appbar />
      <NFTGallery />
    </div>
  );
}
