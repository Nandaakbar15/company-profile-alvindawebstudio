"use client";

import React, { useState } from "react";

import { Section } from "../ui/section";

export default function Contacts() {
  // 1. Simpan state form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Ganti dengan nomor WhatsApp Anda (Gunakan format internasional tanpa '+' atau '0' di depan, misal: 628123456789)
  const phoneNumber = "6281818132011";

  // 2. Handle perubahan input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Handle submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Format isi pesan yang akan dikirim ke WhatsApp
    const textMessage = `Halo AlvindaWebStudio,

    Nama: ${formData.name}
    Email: ${formData.email}
    Subject: ${formData.subject}

    Pesan:
    ${formData.message}`;

    // Encode URL agar karakter seperti spasi & enter terbaca dengan benar
    const encodedMessage = encodeURIComponent(textMessage);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Buka WhatsApp di tab baru
    window.open(waUrl, "_blank");
  };

  // Handle reset form saat tombol Cancel diklik
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Section>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-140 text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-150 text-lg">
            Lets Get Connected
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="border-input bg-background placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 block w-full rounded-md border px-4 py-3 text-base transition-colors focus:ring-2 focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="border-input bg-background placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 block w-full rounded-md border px-4 py-3 text-base transition-colors focus:ring-2 focus:outline-none"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
                className="border-input bg-background placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 block w-full rounded-md border px-4 py-3 text-base transition-colors focus:ring-2 focus:outline-none"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your project..."
                required
                className="border-input bg-background placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 block w-full resize-none rounded-md border px-4 py-3 text-base transition-colors focus:ring-2 focus:outline-none"
              ></textarea>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="hover:bg-muted rounded-md bg-slate-500 px-6 py-3 text-sm font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="focus-visible:ring-primary rounded-md bg-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Send Message via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
