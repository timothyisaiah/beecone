import type { Metadata } from "next";
import CheckoutContent from "./CheckoutContent";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your order and choose your preferred payment method.",
};

export default function CheckoutPage() {
  return <CheckoutContent />;
}
