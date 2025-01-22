// pages/checkout.js
"use client"
import { useState } from "react";
import Link from "next/link";

const CheckoutPage = () => {
  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phoneNumber: "",
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [cartItems, setCartItems] = useState([
    { name: "T-shirt", price: 29.99, quantity: 2 },
    { name: "Jeans", price: 49.99, quantity: 1 },
  ]);

  const handleBillingChange = (e:any) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e:any) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Process checkout, e.g., send to an API, etc.
    alert("Checkout successful!");
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <main className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Checkout</h1>

      <div className="flex flex-col md:flex-row mt-10 space-y-6 md:space-y-0 md:space-x-6">
        {/* Left: Billing Details */}
        <div className="w-full md:w-2/3 bg-white shadow-lg p-6 rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Billing Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={billingDetails.fullName}
                  onChange={handleBillingChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={billingDetails.address}
                  onChange={handleBillingChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={billingDetails.city}
                  onChange={handleBillingChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={billingDetails.postalCode}
                  onChange={handleBillingChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={billingDetails.country}
                  onChange={handleBillingChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={billingDetails.phoneNumber}
                  onChange={handleBillingChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6 mb-4">Payment Details</h2>
            {/* Payment Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={paymentDetails.cardNumber}
                  onChange={handlePaymentChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  value={paymentDetails.expirationDate}
                  onChange={handlePaymentChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={paymentDetails.cvv}
                  onChange={handlePaymentChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <button type="submit" className="mt-6 bg-black text-white py-2 px-8 rounded-md w-full">
              Complete Order
            </button>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full md:w-1/3 bg-white shadow-lg p-6 rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>{item.name}</span>
                <span>
                  {item.quantity} x ${item.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">${totalAmount.toFixed(2)}</span>
          </div>

          <Link href="/">
            <button className="mt-4 bg-gray-200 py-2 px-8 rounded-md w-full">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
