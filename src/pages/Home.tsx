import pngCoffee from "../assets/imgs/png-coffee1.png";
import { ShoppingCart } from 'lucide-react';


const Home = () => {
  return (
    <div id="home" className="min-h-screen flex justify-center items-center">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="p-16 text-gray-100">
          <p className="display-quote text-5xl leading-18 font-black">
            We serve the richest and creamiest coffee in the city of Ormoc.
          </p>
          <p className="text-lg leading-12 tracking-wide">
            Discover a whole new level of flavor and enjoyable.
          </p>
          <button className="my-6 text-2xl py-4 px-8 bg-(--fifth-color) hover:bg-[#a34b08] flex items-center gap-2 rounded-full cursor-pointer"> <ShoppingCart size={24} /> Order now</button>
        </div>
      </div>
      <div className="flex-1 p-4 flex justify-center items-center">
        <div className="w-[30rem]">
          <img src={pngCoffee} alt="pngImg" className="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
