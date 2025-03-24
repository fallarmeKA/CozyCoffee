import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useCart, CartItem } from "/store/cartStore";

const MENU_ITEMS = [
  {
    id: "hot-1",
    name: "Signature Espresso",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80",
  },
  {
    id: "hot-2",
    name: "Cappuccino",
    price: 4.49,
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80",
  },
  {
    id: "cold-1",
    name: "Iced Coffee",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80",
  },
  {
    id: "pastry-1",
    name: "Butter Croissant",
    price: 3.49,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80",
  },
];

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    subtotal,
    tax,
    total,
    itemCount,
  } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartItemCount={itemCount} />

      <div className="container mx-auto px-4 py-8 pt-24">
        <h1 className="mb-8 font-dancing-script text-4xl font-bold text-amber-900 md:text-5xl">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="mb-6 text-lg text-gray-600">Your cart is empty</p>
            <Button
              onClick={() => (window.location.href = "/menu")}
              className="bg-amber-700 hover:bg-amber-800"
            >
              Browse Menu
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {cartItems.map((item: CartItem) => (
                <Card key={item.id} className="mb-4 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-center p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="mr-4 h-20 w-20 rounded-md object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-amber-700">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => decreaseQuantity(item.id)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-4 text-gray-500 hover:text-red-500"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="mt-6 w-full bg-amber-700 hover:bg-amber-800"
                    size="lg"
                    asChild
                  >
                    <Link to="/payment">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button variant="outline" className="mt-4 w-full" asChild>
                    <Link to="/menu">Continue Shopping</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
