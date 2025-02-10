import { mockFeaturedProductType } from "@/types/types";

const ProductCard = ({ product }: { product: mockFeaturedProductType }) => {
  return (
    <div className="min-w-64 border border-(--secondary-colo)">
      <div className="">
        <img className="" src={product.image} alt="" />
      </div>
      <div className="p-4 text-gray-100">
        <h3 className="text-lg font-bold tracking-wide">{product.name}</h3>
      </div>

    </div>
  );
};

export default ProductCard;
