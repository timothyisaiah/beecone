"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Minus, Plus, ShoppingBag, Check, ChevronLeft } from "lucide-react";
import { Product } from "@/types";
import { formatPrice, getAverageRating } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product;
}

export default function ProductDetailContent({ product }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const avgRating = getAverageRating(product.reviews);

  function handleAddToCart() {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-amber-700 transition-colors mb-8"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-amber-50">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === i
                        ? "border-amber-600"
                        : "border-transparent hover:border-stone-300"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div>
            {product.tags.includes("bestseller") && (
              <span className="inline-block rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-semibold mb-4">
                Bestseller
              </span>
            )}

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              {product.name}
            </h1>

            {/* Rating */}
            {product.reviews.length > 0 && (
              <div className="mt-3 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.round(avgRating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-stone-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-stone-500">
                  {avgRating} ({product.reviews.length} review
                  {product.reviews.length !== 1 && "s"})
                </span>
              </div>
            )}

            {/* Price */}
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-stone-900">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-lg text-stone-400 line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>

            <p className="mt-4 text-sm text-stone-500">
              Size: {product.size}
            </p>

            <p className="mt-4 text-stone-600 leading-relaxed">
              {product.longDescription}
            </p>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-full border border-stone-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-11 w-11 items-center justify-center rounded-l-full hover:bg-stone-50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-11 w-11 items-center justify-center rounded-r-full hover:bg-stone-50 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={added}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white transition-all ${
                  added
                    ? "bg-green-600"
                    : "bg-amber-600 hover:bg-amber-500 shadow-lg hover:shadow-amber-500/25"
                }`}
              >
                {added ? (
                  <>
                    <Check className="h-4 w-4" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </>
                )}
              </button>
            </div>

            {/* Benefits */}
            <div className="mt-10">
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                Health & Nutritional Benefits
              </h3>
              <ul className="mt-4 space-y-2">
                {product.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm text-stone-600"
                  >
                    <Check className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nutritional info */}
            <div className="mt-8 rounded-xl bg-amber-50/50 border border-amber-100 p-5">
              <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wider">
                Nutritional Information
              </h4>
              <p className="mt-1 text-xs text-stone-500">
                Per {product.nutritionalInfo.servingSize}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-stone-500">Calories:</span>{" "}
                  <span className="font-medium text-stone-800">
                    {product.nutritionalInfo.calories}
                  </span>
                </div>
                <div>
                  <span className="text-stone-500">Carbs:</span>{" "}
                  <span className="font-medium text-stone-800">
                    {product.nutritionalInfo.totalCarbs}
                  </span>
                </div>
                <div>
                  <span className="text-stone-500">Sugars:</span>{" "}
                  <span className="font-medium text-stone-800">
                    {product.nutritionalInfo.sugars}
                  </span>
                </div>
                <div>
                  <span className="text-stone-500">Protein:</span>{" "}
                  <span className="font-medium text-stone-800">
                    {product.nutritionalInfo.protein}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        {product.reviews.length > 0 && (
          <section className="mt-16 border-t border-stone-100 pt-12">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Customer Reviews
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {product.reviews.map((review) => (
                <div
                  key={review.id}
                  className="rounded-xl border border-stone-100 p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-800 font-bold text-sm">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-stone-900">
                          {review.author}
                        </p>
                        {review.verified && (
                          <p className="text-xs text-green-600">
                            Verified Purchase
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-stone-400">
                      {review.date}
                    </span>
                  </div>
                  <div className="mt-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < review.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-stone-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
