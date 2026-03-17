"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function updateField(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-100 p-12 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <Check className="h-7 w-7 text-green-600" />
        </div>
        <h3 className="mt-4 font-serif text-xl font-bold text-stone-900">
          Message Sent!
        </h3>
        <p className="mt-2 text-sm text-stone-500">
          Thank you for reaching out. We&apos;ll get back to you within 24
          hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", subject: "", message: "" });
          }}
          className="mt-6 text-sm font-medium text-amber-700 hover:text-amber-600 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white border border-stone-100 p-8 shadow-sm"
    >
      <h2 className="font-serif text-2xl font-bold text-stone-900">
        Send Us a Message
      </h2>
      <p className="mt-1 text-sm text-stone-500">
        Fill out the form and we&apos;ll be in touch shortly.
      </p>

      <div className="mt-6 space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-stone-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="contactEmail"
              className="block text-sm font-medium text-stone-700"
            >
              Email
            </label>
            <input
              id="contactEmail"
              type="email"
              required
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-stone-700"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            required
            value={form.subject}
            onChange={(e) => updateField("subject", e.target.value)}
            className="mt-1 block w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition"
            placeholder="How can we help?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-stone-700"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            className="mt-1 block w-full rounded-lg border border-stone-200 px-4 py-2.5 text-sm bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition resize-none"
            placeholder="Tell us more..."
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-8 py-3 text-sm font-semibold text-white hover:bg-amber-500 transition-colors shadow-lg"
        >
          <Send className="h-4 w-4" />
          Send Message
        </button>
      </div>
    </form>
  );
}
