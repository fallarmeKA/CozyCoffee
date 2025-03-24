import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Coffee, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useCart } from "@/store/cartStore";

const OrderConfirmation = () => {
  const [orderNumber] = useState(`CC-${Math.floor(Math.random() * 10000)}`);
  const [estimatedTime] = useState(Math.floor(Math.random() * 10) + 10); // 10-20 minutes

  // In a real app, this would come from an order context or API
  const orderItems = [
    { id: "hot-1", name: "Signature Espresso", price: 3.99, quantity: 1 },
    { id: "pastry-1", name: "Butter Croissant", price: 3.49, quantity: 2 },
  ];

  const subtotal = orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const [countdown, setCountdown] = useState(estimatedTime * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <CheckCircle2 className="h-20 w-20 text-green-500" />
          </div>

          <h1 className="mb-4 font-dancing-script text-4xl font-bold text-amber-900 md:text-5xl">
            Order Confirmed!
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Thank you for your order. We're preparing your items now.
          </p>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="mb-4 text-center">
                <h2 className="text-xl font-semibold">Order #{orderNumber}</h2>
                <p className="text-gray-500">{new Date().toLocaleString()}</p>
              </div>

              <div className="mb-6 rounded-lg bg-amber-50 p-4 text-center">
                <h3 className="mb-2 text-lg font-medium">
                  Estimated Pickup Time
                </h3>
                <div className="flex items-center justify-center space-x-2">
                  <Coffee className="h-5 w-5 text-amber-700" />
                  <span className="text-xl font-bold text-amber-900">
                    {formatTime(countdown)}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Your order will be ready in approximately {estimatedTime}{" "}
                  minutes
                </p>
              </div>

              <div className="mb-4">
                <h3 className="mb-2 font-medium">Order Details</h3>
                {orderItems.map((item) => (
                  <div key={item.id} className="flex justify-between py-1">
                    <span>
                      {item.quantity} × {item.name}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-1 border-t border-gray-200 pt-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              className="bg-amber-700 hover:bg-amber-800"
              size="lg"
              asChild
            >
              <Link to="/">Return to Home</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/menu">
                Order More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
