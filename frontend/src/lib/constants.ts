// src/lib/constants.ts
export const SERVICE_TYPES = [
  "Plumbing",
  "Electrical",
  "Cleaning",
  "Tiling",
  "Welding",
  "Tutoring",
  "Automotive"
];

export const URGENCY_LEVELS = [
  { value: "regular", label: "Regular (within 3 days)" },
  { value: "urgent", label: "Urgent (within 24 hours)" }
];

export const PLAN_FEATURES = {
  master: ["5 quotes/month", "Basic profile", "Customer reviews"],
  professional: ["Unlimited quotes", "Priority listing", "Advanced analytics"],
  enterprise: ["Featured placement", "API access", "Dedicated support"]
};