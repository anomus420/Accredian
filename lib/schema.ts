import { z } from "zod";

export const EnquireFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneCode: z.string().min(1, { message: "Country code is required" }),
  phoneNumber: z.string().regex(/^\d{7,15}$/, { message: "Phone number must be between 7 and 15 digits" }),
  companyName: z.string().min(2, { message: "Company name is required" }),
  domain: z.string().min(1, { message: "Please select a domain" }),
  candidatesCount: z.number().int().positive({ message: "Candidates must be a positive integer" }),
  modeOfDelivery: z.enum(["Online", "Offline", "Hybrid"] as const, {
    message: "Mode of delivery must be Online, Offline, or Hybrid",
  }),
  location: z.string().min(1, { message: "Location is required" }),
});

export type EnquireFormData = z.infer<typeof EnquireFormSchema>;
