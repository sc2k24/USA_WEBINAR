import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { User, Mail, Phone, ArrowRight } from 'lucide-react';
import emailjs from 'emailjs-com';

const RegistrationForm = ({ onSubmit, formId, price }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappNumber: ''
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await emailjs.send(
        'service_kwl17gq',
        'template_o369l19',
        {
          fullName: formData.fullName,
          email: formData.email,
          whatsappNumber: formData.whatsappNumber,
          time: new Date().toLocaleString()
        },
        'e-I_0I2K4MDueLfbr'
      );

      alert("Registration successful! Redirecting to payment...");
      onSubmit && onSubmit(formData, formId);

      // ✅ Razorpay payment link (can also be dynamic)
      window.open('https://razorpay.me/@3Dfactory?amount=FNeLfUMj3NygkcAdxj9boQ%3D%3D', '_blank');
    } catch (error) {
      console.error('Email sending error:', error.text);
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <Card className="glass-effect-usa border-red-500/40 shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl md:text-3xl font-bold text-slate-100">
          Step 1: Register Your Details
        </CardTitle>
        <CardDescription className="text-red-300 pt-1">
          Webinar Fee: ₹{price}. Complete this form to proceed.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor={`fullName-${formId}`} className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center">
              <User className="h-4 w-4 mr-2 text-red-400" /> Full Name
            </label>
            <Input
              id={`fullName-${formId}`}
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="E.g., John Doe"
              className="bg-slate-800/60 border-slate-700 placeholder:text-slate-500 text-slate-100 focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor={`email-${formId}`} className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center">
              <Mail className="h-4 w-4 mr-2 text-red-400" /> Email Address
            </label>
            <Input
              id={`email-${formId}`}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              className="bg-slate-800/60 border-slate-700 placeholder:text-slate-500 text-slate-100 focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor={`whatsappNumber-${formId}`} className="block text-sm font-medium text-slate-300 mb-1.5 flex items-center">
              <Phone className="h-4 w-4 mr-2 text-red-400" /> WhatsApp Number
            </label>
            <Input
              id={`whatsappNumber-${formId}`}
              name="whatsappNumber"
              type="tel"
              value={formData.whatsappNumber}
              onChange={handleInputChange}
              placeholder="Your WhatsApp number for updates"
              className="bg-slate-800/60 border-slate-700 placeholder:text-slate-500 text-slate-100 focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full button-primary-usa py-5 text-lg"
          >
            {loading ? "Submitting..." : "Save & Proceed to Payment Details"}
            {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
