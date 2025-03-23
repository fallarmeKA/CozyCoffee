import React from "react";
import { cn } from "@/lib/utils";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface FeaturedProductsProps {
  title?: string;
  subtitle?: string;
  products?: Product[];
  onViewAllProducts?: () => void;
  onAddToCart?: (id: string) => void;
}

const FeaturedProducts = ({
  title = "Featured Products",
  subtitle = "Discover our most popular coffee selections, handpicked for your enjoyment.",
  products = [
    {
      id: "1",
      name: "Signature Espresso",
      description:
        "Our signature blend with notes of chocolate and caramel, perfectly balanced for a smooth finish.",
      price: 4.99,
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80",
    },
    {
      id: "2",
      name: "Ethiopian Pour Over",
      description:
        "Single-origin Ethiopian beans with bright, fruity notes and a clean, crisp finish.",
      price: 5.49,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
    },
    {
      id: "3",
      name: "Vanilla Latte",
      description:
        "Smooth espresso with steamed milk and a hint of vanilla, topped with a light foam.",
      price: 5.99,
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80",
    },
    {
      id: "4",
      name: "Caramel Macchiato",
      description:
        "Espresso with steamed milk, vanilla syrup, and a drizzle of caramel for a sweet treat.",
      price: 6.49,
      image:
        "https://images.unsplash.com/photo-1534687941688-13b0d8f5df5a?w=400&q=80",
    },
  ],
  onViewAllProducts = () => {},
  onAddToCart = () => {},
}: FeaturedProductsProps) => {
  return (
    <section className="w-full bg-amber-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                onAddToCart={onAddToCart}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            onClick={onViewAllProducts}
            className="bg-amber-800 text-white hover:bg-amber-900"
            size="lg"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
