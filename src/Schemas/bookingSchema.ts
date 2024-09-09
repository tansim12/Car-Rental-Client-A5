/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
// Create a Zod schema for the date object
const DateSchema = z.preprocess((arg) => {
  // Check if the input is a Day.js object and convert it to a JS Date
  if (typeof arg === "object" && arg !== null && (arg as any).$d instanceof Date) {
    return (arg as any).$d;
  }
  return arg;
}, z.date());

// Define the main schema
export const bookingSchema = z.object({
  pickupArea: z.string({ required_error: "Pickup area is required" }),
  dropOffArea: z.string({ required_error: "Drop off area is required" }),
  dateRange: z
    .array(DateSchema, { required_error: "Select Start To End Date" })
    .length(2, "You must provide exactly two dates for the range"),
});
