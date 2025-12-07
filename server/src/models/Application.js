import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    location: String,
    roles: [String],
    experienceYears: Number,
    tools: [String],
    domains: [String],
    portfolioUrls: [String],
    linkedinUrl: String,
    availability: String,
    message: String,
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default mongoose.model('Application', applicationSchema);
