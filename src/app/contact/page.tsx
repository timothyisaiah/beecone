import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Beecone. We'd love to hear from you about orders, partnerships, or just to say hello.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact.beecone@gmail.com",
    href: "mailto:contact.beecone@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+233 XX XXX XXXX",
    href: "tel:+233000000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kampala, Uganda",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-stone-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Get in Touch
          </h1>
          <p className="mt-3 text-stone-300 max-w-xl mx-auto">
            Have a question, feedback, or partnership inquiry? We&apos;d love
            to hear from you.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Contact Information
            </h2>
            <p className="mt-2 text-sm text-stone-500">
              Reach out through any channel — we typically respond within 24
              hours.
            </p>

            <div className="mt-8 space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 shrink-0">
                    <info.icon className="h-5 w-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-900">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-stone-500 hover:text-amber-700 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-stone-500">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider">
                Follow Us
              </h3>
              <div className="mt-3 flex gap-4">
                {["Instagram", "Twitter", "Facebook"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="rounded-full bg-stone-100 px-4 py-2 text-xs font-medium text-stone-600 hover:bg-amber-100 hover:text-amber-700 transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactContent />
          </div>
        </div>
      </div>
    </div>
  );
}
