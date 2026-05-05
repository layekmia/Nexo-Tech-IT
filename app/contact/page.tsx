"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  business: string;
  phone: string;
  service: string;
  timeline: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  business: "",
  phone: "",
  service: "Professional Business Website",
  timeline: "As soon as possible",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setFormState("success");
      setFormData(INITIAL_FORM);
    } catch (err: unknown) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const inputClass =
    "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed";

  const isLoading = formState === "loading";

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Column */}
          <div>
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Let's Solve Your Business Headaches
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Whether you need to automate your Facebook orders, manage your school, or launch
                an online store, we are here to help. Tell us what you need, in plain English.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">WhatsApp / Phone</h4>
                    <a
                      href="https://wa.me/8801613103990"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-primary transition-colors"
                    >
                      +8801613103990
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Us</h4>
                    <a
                      href="mailto:contact@nexotechit.com"
                      className="text-slate-600 hover:text-primary transition-colors"
                    >
                      contact@nexotechit.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Location</h4>
                    <p className="text-slate-600">Based in Sylhet, Bangladesh. Helping businesses everywhere.</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Prefer a Quick Chat?</h3>
                <p className="text-slate-500 text-sm mb-6">
                  Message us on WhatsApp for a fast, friendly response — usually within minutes.
                </p>
                <a
                  href="https://wa.me/8801613103990?text=Hi%2C%20I%20found%20your%20website%20and%20I%27d%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-3 rounded-full font-medium w-full block hover:bg-green-600 transition-colors"
                >
                  Open WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column — Form */}
          <Reveal direction="left">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h3>

              {/* Success State */}
              {formState === "success" ? (
                <div className="bg-green-50 text-green-700 p-8 rounded-2xl flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Message Sent! 🎉</h4>
                  <p className="text-green-600 mb-6 leading-relaxed">
                    Thank you for reaching out! We've also sent a confirmation to your email.
                    We'll get back to you within 1–2 business hours.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>

                  {/* Error Banner */}
                  {formState === "error" && (
                    <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p className="text-sm font-medium">{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        type="text"
                        disabled={isLoading}
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        disabled={isLoading}
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="business" className="text-sm font-semibold text-slate-700">
                        Business / Shop Name
                      </label>
                      <input
                        id="business"
                        name="business"
                        type="text"
                        disabled={isLoading}
                        value={formData.business}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your Business"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                        WhatsApp / Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        disabled={isLoading}
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your WhatsApp number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-semibold text-slate-700">
                        How can we help?
                      </label>
                      <select
                        id="service"
                        name="service"
                        disabled={isLoading}
                        value={formData.service}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option>Professional Business Website</option>
                        <option>E-Commerce / Online Store</option>
                        <option>F-Commerce Website Upgrade</option>
                        <option>School / LMS Platform</option>
                        <option>Inventory Management</option>
                        <option>Custom Software Tool</option>
                        <option>Just Exploring Options</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="timeline" className="text-sm font-semibold text-slate-700">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        disabled={isLoading}
                        value={formData.timeline}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option>As soon as possible</option>
                        <option>Within 1 Month</option>
                        <option>1-3 Months</option>
                        <option>Just researching for now</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                      Tell us about your business <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      disabled={isLoading}
                      value={formData.message}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="What are your current daily challenges?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    We typically respond within 1–2 business hours.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
}