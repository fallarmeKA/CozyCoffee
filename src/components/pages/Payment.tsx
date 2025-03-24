import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Landmark, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/store/cartStore";

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [loading, setLoading] = useState(false);
  const { cartItems, subtotal, tax, total, itemCount, clearCart } = useCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      clearCart(); // Clear cart after successful payment
      navigate("/order-confirmation");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartItemCount={itemCount} />

      <div className="container mx-auto px-4 py-8 pt-24">
        <h1 className="mb-8 font-dancing-script text-4xl font-bold text-amber-900 md:text-5xl">
          Checkout
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-6 text-xl font-semibold">Payment Method</h2>

                <Tabs
                  defaultValue="credit-card"
                  onValueChange={setPaymentMethod}
                >
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger
                      value="credit-card"
                      className="flex items-center justify-center"
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Credit Card
                    </TabsTrigger>
                    <TabsTrigger
                      value="bank-transfer"
                      className="flex items-center justify-center"
                    >
                      <Landmark className="mr-2 h-4 w-4" />
                      Bank Transfer
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="credit-card">
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-name">Name on Card</Label>
                        <Input id="card-name" placeholder="John Doe" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input
                          id="card-number"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="billing-address">Billing Address</Label>
                        <Input
                          id="billing-address"
                          placeholder="123 Coffee St"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="New York" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">ZIP Code</Label>
                          <Input id="zip" placeholder="10001" required />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="mt-6 w-full bg-amber-700 hover:bg-amber-800"
                        size="lg"
                        disabled={loading}
                      >
                        {loading ? "Processing..." : "Pay Now"}
                        {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="bank-transfer">
                    <div className="mt-6 space-y-4">
                      <p className="text-gray-600">
                        Please use the following details to make a bank
                        transfer:
                      </p>

                      <div className="rounded-md bg-gray-50 p-4">
                        <p>
                          <strong>Bank Name:</strong> Cozy Coffee Bank
                        </p>
                        <p>
                          <strong>Account Name:</strong> Cozy Coffee LLC
                        </p>
                        <p>
                          <strong>Account Number:</strong> 1234567890
                        </p>
                        <p>
                          <strong>Routing Number:</strong> 987654321
                        </p>
                        <p>
                          <strong>Reference:</strong> Your Order #CC-
                          {Math.floor(Math.random() * 10000)}
                        </p>
                      </div>

                      <p className="text-sm text-gray-500">
                        Please note that your order will only be processed after
                        we receive your payment. This may take 1-2 business
                        days.
                      </p>

                      <Button
                        onClick={handleSubmit}
                        className="mt-6 w-full bg-amber-700 hover:bg-amber-800"
                        size="lg"
                        disabled={loading}
                      >
                        {loading ? "Processing..." : "Complete Order"}
                        {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>

                {cartItems.map((item) => (
                  <div key={item.id} className="mb-2 flex justify-between">
                    <span>
                      {item.quantity} × {item.name}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}

                <div className="mt-4 space-y-2">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
