"use client"
import { BreadcrumbDemo } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Delete, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Icart {
  imageurl: string;
  title: string;
  id: number;
  size: string;
  color: string;
  price: string;
  quantity: number; // Add quantity to cart item
}

const initialCartItems: Icart[] = [
  {
    imageurl: "/product1.png",
    title: "Gradient Graphic T-shirt",
    id: 1,
    size: "large",
    color: "white",
    price: "$120",
    quantity: 1,
  },
  {
    imageurl: "/product2.png",
    title: "Gradient Graphic T-shirt",
    id: 2,
    size: "large",
    color: "white",
    price: "$120",
    quantity: 1,
  },
  {
    imageurl: "/product3.png",
    title: "Gradient Graphic T-shirt",
    id: 3,
    size: "large",
    color: "white",
    price: "$120",
    quantity: 1,
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState<Icart[]>(initialCartItems);

  // Update quantity for an item
  const updateQuantity = (id: number, type: "increase" | "decrease") => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase" ? item.quantity + 1 : item.quantity - 1 > 0
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  // Remove an item from the cart
  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate the total price
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price.replace("$", "")) * item.quantity,
      0
    );
  };

  return (
    <>
      <div className="pl-5">
        <BreadcrumbDemo />
        <h1 className="text-2xl font-bold mt-2">Your cart</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-3 mt-6">
        {/* left div */}
        <div className="w-full h-full md:w-[700px] md:h-[500px] border rounded-[20px]">
          {cartItems.map((item) => (
            <div className="flex justify-between mt-4 p-4 border-b" key={item.id}>
              <div className="flex gap-3">
                <Image
                  src={item.imageurl}
                  alt={item.title}
                  className="rounded-[16px]"
                  width={100}
                  height={100}
                />
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm">Size: {item.size}</p>
                  <p className="text-sm">Color: {item.color}</p>
                  <p className="font-bold">{item.price}</p>
                </div>
              </div>
              {/* right side */}
              <div className="flex flex-col justify-between items-center space-y-5">
                <Delete className="cursor-pointer" onClick={() => removeItem(item.id)} />
                <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
                  <Minus
                    className="cursor-pointer"
                    onClick={() => updateQuantity(item.id, "decrease")}
                  />
                  {item.quantity}
                  <Plus
                    className="cursor-pointer"
                    onClick={() => updateQuantity(item.id, "increase")}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* right div */}
        <div className="w-full md:w-[400px] h-full md:h-[450px] border rounded-[20px] flex flex-col justify-start items-center p-4">
          <div className="w-[90%] space-y-2">
            <h1 className="text-xl font-bold">Order Summary</h1>
            <p className="flex justify-between">
              Subtotal <span>${calculateTotal()}</span>
            </p>
            <p className="flex justify-between">Shipping <span>$10</span></p>
            <p className="flex justify-between">Tax <span>$20</span></p>
            <p className="flex justify-between">
              Total <span>${calculateTotal() + 30}</span> {/* subtotal + shipping + tax */}
            </p>
            <div className="flex">
              <input
                className="bg-[#F0F0F0] w-[200px] md:w-full py-2 px-5 rounded-[16px] text-gray-600 outline-none"
                placeholder="Add promo code"
              />
              <Button className="ml-1">Apply</Button>
            </div>
            <Link href="/checkout">
              <Button className="w-full">Go To Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
