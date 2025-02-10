import ProductCard from "@/components/ui-components/ProductCard";
import { mockMenuProducts } from "@/constants/products";

const Menu = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col pt-6"
      id="menu"
    >
      <div className="text-gray-200 text-6xl font-black my-6"> Our Menu</div>
      <p className="text-gray-200 text-lg leading-7 tracking-wide w-[42rem] text-center mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, minus
        ab. Odio corrupti placeat magnam.
      </p>
      <div className="grid grid-cols-4 gap-12">
        {mockMenuProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
