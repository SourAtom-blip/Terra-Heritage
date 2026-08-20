import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    propertyAddress: { type: String, required: true, trim: true },
    apn: { type: String, trim: true },
    acreage: { type: String, required: true, trim: true },
    reason: { type: String, trim: true },
    details: { type: String, trim: true },
    status: {
      type: String,
      enum: ["new", "contacted", "under_review", "offer_made", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
