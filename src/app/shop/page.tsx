import type { Metadata } from "next";
import ShopContent from "./ShopContent";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse our collection of premium, natural honey products. From raw wildflower honey to infused varieties and gift sets.",
};

export default function ShopPage() {
  return <ShopContent />;
}
