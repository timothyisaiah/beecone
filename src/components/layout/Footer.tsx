"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  shop: [
    { href: "/shop?category=raw", label: "Raw Honey" },
    { href: "/shop?category=infused", label: "Infused Honey" },
    { href: "/shop?category=creamed", label: "Creamed Honey" },
    { href: "/shop?category=honeycomb", label: "Honeycomb" },
    { href: "/shop?category=gift-set", label: "Gift Sets" },
  ],
  company: [
    { href: "/about", label: "Our Story" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  support: [
    { href: "/contact", label: "Help Center" },
    { href: "/contact", label: "Shipping Info" },
    { href: "/contact", label: "Returns" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Newsletter */}
      <div className="border-b border-stone-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-white">
                Stay in the Hive
              </h3>
              <p className="mt-1 text-sm text-stone-400">
                Get exclusive offers, recipes, and honey tips delivered to your
                inbox.
              </p>
            </div>
            {subscribed ? (
              <p className="text-amber-400 font-medium text-sm">
                Thank you for subscribing!
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex w-full max-w-md"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 rounded-l-lg border-0 bg-stone-800 px-4 py-2.5 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  className="rounded-r-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-500 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-1.5">
              <Image
                src="/images/logo-gold.png"
                alt="Beecone"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="font-serif text-lg font-bold text-white tracking-tight">
                BEECONE
              </span>
            </Link>
            <p className="mt-3 text-sm text-stone-400 leading-relaxed">
              Sweetness from Within. Premium, natural honey sourced ethically
              and crafted with care by Beacon Flame Innovations.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider">
              Shop
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-stone-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Beacon Flame Innovations. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-500 hover:text-amber-400 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-500 hover:text-amber-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-500 hover:text-amber-400 transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
