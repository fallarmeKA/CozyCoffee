import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/shared/ProductCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const MENU_ITEMS: Product[] = [
  // Hot Drinks
  {
    id: "hot-1",
    name: "Signature Espresso",
    description:
      "Our signature blend with notes of chocolate and caramel, perfectly balanced for a smooth finish.",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80",
    category: "hot-drinks",
  },
  {
    id: "hot-2",
    name: "Cappuccino",
    description:
      "Espresso with steamed milk and a thick layer of foam for a rich, indulgent experience.",
    price: 4.49,
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80",
    category: "hot-drinks",
  },
  {
    id: "hot-3",
    name: "Vanilla Latte",
    description:
      "Smooth espresso with steamed milk and a hint of vanilla, topped with a light foam.",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80",
    category: "hot-drinks",
  },
  {
    id: "hot-4",
    name: "Caramel Macchiato",
    description:
      "Espresso with steamed milk, vanilla syrup, and a drizzle of caramel for a sweet treat.",
    price: 5.49,
    image:
      "https://images.unsplash.com/photo-1534687941688-13b0d8f5df5a?w=400&q=80",
    category: "hot-drinks",
  },

  // Cold Drinks
  {
    id: "cold-1",
    name: "Iced Coffee",
    description:
      "Our signature coffee blend served over ice for a refreshing pick-me-up.",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80",
    category: "cold-drinks",
  },
  {
    id: "cold-2",
    name: "Cold Brew",
    description:
      "Coffee steeped for 12 hours for a smooth, less acidic flavor profile.",
    price: 4.49,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
    category: "cold-drinks",
  },
  {
    id: "cold-3",
    name: "Iced Caramel Latte",
    description:
      "Espresso with cold milk, caramel syrup, and ice, topped with whipped cream.",
    price: 5.49,
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80",
    category: "cold-drinks",
  },
  {
    id: "cold-4",
    name: "Frappuccino",
    description:
      "Blended coffee with ice and milk, topped with whipped cream for a frozen treat.",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80",
    category: "cold-drinks",
  },

  // Pastries
  {
    id: "pastry-1",
    name: "Butter Croissant",
    description:
      "Flaky, buttery layers make this classic pastry the perfect companion to your coffee.",
    price: 3.49,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80",
    category: "pastries",
  },
  {
    id: "pastry-2",
    name: "Chocolate Muffin",
    description:
      "Rich chocolate muffin with chocolate chips throughout for a double chocolate experience.",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1604882406385-6eb3f9f2c1d9?w=400&q=80",
    category: "pastries",
  },
  {
    id: "pastry-3",
    name: "Cinnamon Roll",
    description:
      "Soft, warm roll with cinnamon swirls and cream cheese frosting.",
    price: 4.49,
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&q=80",
    category: "pastries",
  },
  {
    id: "pastry-4",
    name: "Blueberry Scone",
    description:
      "Buttery scone filled with fresh blueberries and topped with a sweet glaze.",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1600617953089-218e1b0b0098?w=400&q=80",
    category: "pastries",
  },

  // Breakfast
  {
    id: "breakfast-1",
    name: "Avocado Toast",
    description:
      "Sourdough toast topped with mashed avocado, cherry tomatoes, and a sprinkle of sea salt.",
    price: 7.99,
    image:
      "https://images.unsplash.com/photo-1603046891744-76e6300f82ef?w=400&q=80",
    category: "breakfast",
  },
  {
    id: "breakfast-2",
    name: "Breakfast Sandwich",
    description:
      "Egg, cheese, and your choice of bacon or sausage on a toasted English muffin.",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=400&q=80",
    category: "breakfast",
  },
  {
    id: "breakfast-3",
    name: "Yogurt Parfait",
    description:
      "Layers of Greek yogurt, granola, and fresh berries drizzled with honey.",
    price: 5.99,
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
    category: "breakfast",
  },
  {
    id: "breakfast-4",
    name: "Oatmeal Bowl",
    description:
      "Steel-cut oats topped with brown sugar, cinnamon, and your choice of toppings.",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400&q=80",
    category: "breakfast",
  },
];

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (id: string) => {
    setCartItems([...cartItems, id]);
    // In a real app, you would dispatch to a cart store or context
    console.log(`Added product ${id} to cart`);
  };

  const filteredProducts = MENU_ITEMS.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const hotDrinks = filteredProducts.filter(
    (product) => product.category === "hot-drinks",
  );
  const coldDrinks = filteredProducts.filter(
    (product) => product.category === "cold-drinks",
  );
  const pastries = filteredProducts.filter(
    (product) => product.category === "pastries",
  );
  const breakfast = filteredProducts.filter(
    (product) => product.category === "breakfast",
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartItemCount={cartItems.length} />

      <div className="container mx-auto px-4 py-8 pt-24">
        <h1 className="mb-8 font-dancing-script text-4xl font-bold text-amber-900 md:text-5xl">
          Our Menu
        </h1>

        <div className="mb-8 flex w-full max-w-md items-center space-x-2">
          <Input
            type="text"
            placeholder="Search our menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-amber-200 focus-visible:ring-amber-500"
          />
          <Button type="submit" className="bg-amber-700 hover:bg-amber-800">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="hot-drinks" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="hot-drinks">Hot Drinks</TabsTrigger>
            <TabsTrigger value="cold-drinks">Cold Drinks</TabsTrigger>
            <TabsTrigger value="pastries">Pastries</TabsTrigger>
            <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
          </TabsList>

          <TabsContent value="hot-drinks">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {hotDrinks.map((product) => (
                <div key={product.id} className="flex justify-center">
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cold-drinks">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {coldDrinks.map((product) => (
                <div key={product.id} className="flex justify-center">
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pastries">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {pastries.map((product) => (
                <div key={product.id} className="flex justify-center">
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="breakfast">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {breakfast.map((product) => (
                <div key={product.id} className="flex justify-center">
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 flex justify-center">
          <Button
            onClick={() => (window.location.href = "/cart")}
            className="bg-amber-800 text-white hover:bg-amber-900"
            size="lg"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            View Cart ({cartItems.length})
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
