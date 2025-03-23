import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  onAddToCart?: (id: string) => void;
}

const ProductCard = ({
  id = "1",
  name = "Signature Espresso",
  description = "Our signature blend with notes of chocolate and caramel, perfectly balanced for a smooth finish.",
  price = 4.99,
  image = "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80",
  onAddToCart = () => {},
}: ProductCardProps) => {
  return (
    <Card className="w-full max-w-[280px] overflow-hidden bg-white shadow-md transition-all hover:shadow-lg">
      <div className="relative h-[180px] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="mb-2 line-clamp-3 text-sm text-gray-600">{description}</p>
        <p className="text-md font-bold text-amber-700">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onAddToCart(id)}
          className="w-full bg-amber-800 text-white hover:bg-amber-900"
          size="sm"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
