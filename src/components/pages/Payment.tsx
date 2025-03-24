import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  const [error, setError] = useState("");
  const { cartItems, subtotal, tax, total, itemCount, clearCart } = useCart();

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const validateForm = () => {
    const cardNumberRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/(\d{2})$/;
    const cvcRegex = /^\d{3,4}$/;

    if (!cardName || !cardNumber || !expiry || !cvc || !billingAddress || !city || !zip) {
      setError("All fields are required.");
      return false;
    }
    if (!cardNumberRegex.test(cardNumber)) {
      setError("Invalid card number format.");
      return false;
    }
    if (!expiryRegex.test(expiry)) {
      setError("Invalid expiry date format.");
      return false;
    }
    if (!cvcRegex.test(cvc)) {
      setError("Invalid CVC.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (Math.random() < 0.2) {
        setError("Payment failed! Please try again.");
      } else {
        clearCart();
        navigate("/order-confirmation");
      }
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

                <Tabs defaultValue="credit-card" onValueChange={setPaymentMethod}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="credit-card" className="flex items-center justify-center">
                      <CreditCard className="mr-2 h-4 w-4" /> Credit Card
                    </TabsTrigger>
                    <TabsTrigger value="bank-transfer" className="flex items-center justify-center">
                      <Landmark className="mr-2 h-4 w-4" /> Bank Transfer
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="credit-card">
                    {error && <p className="text-red-600">{error}</p>}
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <Input id="card-name" value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder="John Doe" required />
                      <Input id="card-number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="1234 5678 9012 3456" required />
                      <div className="grid grid-cols-2 gap-4">
                        <Input id="expiry" value={expiry} onChange={(e) => setExpiry(e.target.value)} placeholder="MM/YY" required />
                        <Input id="cvc" type="password" value={cvc} onChange={(e) => setCvc(e.target.value)} placeholder="123" required />
                      </div>
                      <Input id="billing-address" value={billingAddress} onChange={(e) => setBillingAddress(e.target.value)} placeholder="123 Coffee St" required />
                      <div className="grid grid-cols-2 gap-4">
                        <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="New York" required />
                        <Input id="zip" value={zip} onChange={(e) => setZip(e.target.value)} placeholder="10001" required />
                      </div>
                      <Button type="submit" className="mt-6 w-full bg-amber-700 hover:bg-amber-800" size="lg" disabled={loading}>
                        {loading ? "Processing..." : "Pay Now"}
                        {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
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
