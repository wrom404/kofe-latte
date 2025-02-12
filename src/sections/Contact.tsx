import GoogleMapComponent from "@/utils/GoogleMapComponent";

const Contact = () => {
  return (
    <div className="min-h-[32rem] text-gray-200 flex justify-between items-center gap-16 my-6 mt-26 py-12">
      <div className="flex-1 flex justify-end items-center">
        <div className="mt-8 w-xl">
          <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
          {/* GoMaps Embed API */}
          <GoogleMapComponent />
        </div>
      </div>
      <div className="flex-1 w-56">
        <div className="">
          <h3 className="text-gray-200 font-semibold text-2xl tracking-wide">
            Get in touch
          </h3>
        </div>
        <div className="mt-6">
          <div className="w-[28rem]">
            <label htmlFor="" className="text-gray-200  my-2 block">
              Username
            </label>
            <input
              type="text"
              className="border border-(--secondary-color) py-2 px-4 rounded-xl w-full outline-none focus:outline-(--fifth-color) focus:ring focus:ring-(--fifth-color)"
            />
          </div>
          <div className="w-[28rem] mt-4">
            <label htmlFor="" className="text-gray-200  my-2 block">
              Email
            </label>
            <input
              type="text"
              className="border border-(--secondary-color) py-2 px-4 rounded-xl w-full outline-none focus:outline-(--fifth-color) focus:ring focus:ring-(--fifth-color)"
            />
          </div>
          <div className="w-[28rem] mt-4">
            <label htmlFor="" className="text-gray-200  my-2 block">
              Message
            </label>
            <textarea
              className="border border-(--secondary-color) outline-none focus:outline-(--fifth-color) focus:ring focus:ring-(--fifth-color) p-3 rounded-xl "
              name="w3review"
              rows={5}
              cols={50}
            ></textarea>
          </div>
          <div className="w-[28rem] flex justify-end my-4">
            <button className="py-2 px-4 bg-(--fifth-color) rounded-xl text-lg cursor-pointer hover:bg-[#a34b08]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
