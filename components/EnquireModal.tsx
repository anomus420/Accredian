"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { useModal } from "@/lib/store";
import { EnquireFormSchema, EnquireFormData } from "@/lib/schema";

const domains = [
  "IT & Software",
  "Healthcare & Life Sciences",
  "Retail & E-commerce",
  "Finance & Banking",
  "Education & EdTech",
  "Manufacturing & Logistics",
  "Other"
];

const countryCodes = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1", flag: "🇺🇸", name: "USA" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
];

export default function EnquireModal() {
  const { isOpen, closeModal } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EnquireFormData>({
    resolver: zodResolver(EnquireFormSchema),
    defaultValues: {
      phoneCode: "+91",
      modeOfDelivery: undefined,
      domain: "",
    },
  });

  const selectedPhoneCode = watch("phoneCode");
  const selectedDomain = watch("domain");
  const selectedMode = watch("modeOfDelivery");

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setSubmitSuccess(false);
      setApiError(null);
      reset({
        phoneCode: "+91",
        domain: "",
        name: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        candidatesCount: undefined,
        modeOfDelivery: undefined,
        location: "",
      });
    }
  }, [isOpen, reset]);

  // Trap focus and Esc to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  const onSubmit = async (data: EnquireFormData) => {
    setIsSubmitting(true);
    setApiError(null);
    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitSuccess(true);
      } else {
        setApiError(result.error || "Submission failed. Please check the fields and try again.");
      }
    } catch (e) {
      setApiError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { type: "spring", damping: 25, stiffness: 350 }
            }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="relative z-10 w-full max-w-lg bg-white dark:bg-slate-900 shadow-2xl overflow-hidden
                       md:rounded-2xl h-full md:h-auto md:max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/40">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Enquire Now
              </h3>
              <button
                onClick={closeModal}
                className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form body */}
            <div className="flex-1 overflow-y-auto p-6">
              {submitSuccess ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-4"
                >
                  <CheckCircle className="h-16 w-16 text-emerald-500 mb-4 animate-bounce" />
                  <h4 className="text-2xl font-bold text-slate-950 dark:text-slate-50 mb-2">
                    Enquiry Received!
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm">
                    Thank you for your interest. One of our corporate learning advisors will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={closeModal}
                    className="py-3 px-8 bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-medium rounded-xl hover:shadow-lg hover:shadow-brand-indigo/35 transition-all"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {apiError && (
                    <div className="p-3 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 text-sm rounded-lg border border-red-100 dark:border-red-900/50">
                      {apiError}
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      {...register("name")}
                      className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/50 transition-all ${
                        errors.name ? "border-red-500" : "border-slate-200 dark:border-slate-800"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      {...register("email")}
                      className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/50 transition-all ${
                        errors.email ? "border-red-500" : "border-slate-200 dark:border-slate-800"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <div className="relative w-28">
                        <select
                          {...register("phoneCode")}
                          className="w-full pl-3 pr-8 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/50 transition-all appearance-none cursor-pointer"
                        >
                          {countryCodes.map((item) => (
                            <option key={item.code} value={item.code}>
                              {item.flag} {item.code}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-500 text-xs">
                          ▼
                        </div>
                      </div>
                      <input
                        type="tel"
                        placeholder="Enter Phone Number"
                        {...register("phoneNumber")}
                        className={`flex-1 px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/50 transition-all ${
                          errors.phoneNumber ? "border-red-500" : "border-slate-200 dark:border-slate-800"
                        }`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter company name"
                      {...register("companyName")}
                      className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/50 transition-all ${
                        errors.companyName ? "border-red-500" : "border-slate-200 dark:border-slate-800"
                      }`}
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>
                    )}
                  </div>

                  {/* Domain */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Domain
                    </label>
                    <div className="relative">
                      <select
                        {...register("domain")}
                        className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/50 transition-all appearance-none cursor-pointer ${
                          errors.domain ? "border-red-500" : "border-slate-200 dark:border-slate-800"
                        }`}
                      >
                        <option value="" disabled>Select Domain</option>
                        {domains.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500 text-xs">
                        ▼
                      </div>
                    </div>
                    {errors.domain && (
                      <p className="text-red-500 text-xs mt-1">{errors.domain.message}</p>
                    )}
                  </div>

                  {/* Candidates count */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      No. of Candidates
                    </label>
                    <input
                      type="number"
                      placeholder="Enter No. of candidates"
                      {...register("candidatesCount", { valueAsNumber: true })}
                      className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/50 transition-all ${
                        errors.candidatesCount ? "border-red-500" : "border-slate-200 dark:border-slate-800"
                      }`}
                    />
                    {errors.candidatesCount && (
                      <p className="text-red-500 text-xs mt-1">{errors.candidatesCount.message}</p>
                    )}
                  </div>

                  {/* Mode of Delivery */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Mode of Delivery *
                    </label>
                    <div className="relative">
                      <select
                        {...register("modeOfDelivery")}
                        className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/50 transition-all appearance-none cursor-pointer ${
                          errors.modeOfDelivery ? "border-red-500" : "border-slate-200 dark:border-slate-800"
                        }`}
                      >
                        <option value="" disabled>Select Mode of Delivery *</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                        <option value="Hybrid">Hybrid</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500 text-xs">
                        ▼
                      </div>
                    </div>
                    {errors.modeOfDelivery && (
                      <p className="text-red-500 text-xs mt-1">{errors.modeOfDelivery.message}</p>
                    )}
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="Eg: Gurgaon, Delhi, India"
                      {...register("location")}
                      className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/50 transition-all ${
                        errors.location ? "border-red-500" : "border-slate-200 dark:border-slate-800"
                      }`}
                    />
                    {errors.location && (
                      <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-brand-indigo to-brand-purple text-white text-sm font-bold rounded-lg hover:shadow-lg hover:shadow-brand-indigo/25 focus:ring-2 focus:ring-brand-indigo/40 focus:outline-none transition-all disabled:opacity-50 mt-6"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
