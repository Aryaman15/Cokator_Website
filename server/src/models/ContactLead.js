import mongoose from 'mongoose';

const contactLeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: String,
    email: { type: String, required: true },
    phone: String,
    country: String,
    projectType: String,
    volume: String,
    message: String,
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default mongoose.model('ContactLead', contactLeadSchema);
