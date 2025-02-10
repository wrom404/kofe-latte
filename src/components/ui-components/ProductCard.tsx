import { CiHeart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { mockFeaturedProductType } from "@/types/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProductCard = ({ product }: { product: mockFeaturedProductType }) => {
  return (
    <Card className="bg-(--secondary-color) text-gray-200 border-none rounded-none rounded-br-4xl rounded-tl-4xl">
      <div className="w-60 overflow-hidden rounded-tl-4xl">
        <img className="rounded-tl-xl hover:scale-105 transition-transform cursor-pointer" src={product.image} alt="img" />
      </div>
      <CardHeader>
        <CardTitle className="tracking-wide">{product.name}</CardTitle>
        <CardDescription className="text-xl text-(--quaternary-color)">{product.price}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-end gap-3">
        <CiHeart className="cursor-pointer hover:scale-125 hover:text-(--fifth-color) transition-transform" size={24} />
        <GoPlus className="cursor-pointer hover:scale-125 hover:text-(--fifth-color) transition-transform" size={24} />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
