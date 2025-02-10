import coffee12 from "../assets/imgs/coffee12.avif";
export const About = () => {
  return (
    <div className="min-h-screen mt-8 w-full text-gray-200 flex justify-around items-center p-16 gap-32">
      <div className="flex-1 flex justify-end rounded-tr-4xl rounded-bl-4xl overflow-hidden">
        <img className="rounded-tr-4xl rounded-bl-4xl hover:scale-105 transition-transform" src={coffee12} alt="" />
      </div>
      <div className="min-h-[28rem] flex-1 flex flex-col items-start">
        <h3 className="text-6xl font-black my-4">About Us</h3>
        <div className="w-[36rem]">
          <p className="text-lg tracking-wide leading-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            officiis neque pariatur quisquam eos illo id voluptatibus nulla ad
            commodi eligendi sunt, ipsa aut sequi magni maiores asperiores!
            Veniam commodi consequuntur dolorem animi, fugiat cupiditate libero
            amet mollitia voluptate delectus dolor, praesentium, odio repellat
            accusantium iusto dolores. Molestiae, harum suscipit.
          </p>
        </div>
        <button className="bg-(--fifth-color) py-3 px-5 rounded-2xl font-extralight my-4 hover:bg-[#a34b08] cursor-pointer">Learn more</button>
      </div>
    </div>
  );
};
