'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { MessageSquare, ArrowRight } from "lucide-react";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbx15P-868ZvyU6Pge8bHPuya0oPMcMEBUnd-TbxZ9rhqgd4PcETEsS4WwWgx05k3Mdl/exec", {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

     
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#132528] fade-in-section" id="cta">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-coach-green/20 p-3 rounded-full mb-6">
              <MessageSquare className="h-8 w-8 text-coach-green animate-pulse-slow" />
            </div>
            <h2 className="font-clash text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
              Ready to Automate Your Coaching Business?
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8">
              Book your free 30-minute funnel audit call. We'll review your current setup and show you exactly what you need to start converting more leads into clients.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <div className="flex items-center justify-center bg-white px-5 py-3 rounded-none shadow-sm">
                <span className="font-bold text-coach-green mr-2">✓</span>
                <span className="text-gray-800">No obligation</span>
              </div>
              <div className="flex items-center justify-center bg-white px-5 py-3 rounded-none shadow-sm">
                <span className="font-bold text-coach-green mr-2">✓</span>
                <span className="text-gray-800">Free personalized guidance</span>
              </div>
              <div className="flex items-center justify-center bg-white px-5 py-3 rounded-none shadow-sm">
                <span className="font-bold text-coach-green mr-2">✓</span>
                <span className="text-gray-800">30-minute call</span>
              </div>
            </div>
          </div>

          <div className="bg-[#132528] rounded-3xl border border-coach-green shadow-2xl overflow-hidden transform transition-all hover:shadow-xl" id="lead-form">
            <div className="p-8 md:p-12">

              <h3 className="font-clash text-2xl font-bold mb-8 text-coach-green">Book Your Free Funnel Audit</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-white">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="rounded-none text-white h-12 border-[#f8df60]/30 focus:border-0 transition-all duration-300 bg-coach-green/5"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                      className="rounded-none  text-white h-12 border-[#f8df60]/30 focus:border-white transition-all duration-300 bg-coach-green/5"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="website" className="block text-sm font-medium text-white">
                    Website (if you have one)
                  </label>
                  <Input
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    className="rounded-none h-12 text-white  border-[#f8df60]/30 focus:border-white transition-all duration-300 bg-coach-green/5"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-white">
                    What's your biggest challenge with getting clients right now?
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about your current situation..."
                    className="min-h-[120px] text-white  rounded-none border-[#f8df60]/30 focus:border-coach-green transition-all duration-300 bg-coach-green/5"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-coach-green hover:bg-coach-green/90 text-[#132528] font-medium text-lg py-6 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-subtle-pulse"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book My Free Funnel Audit"}
                  <ArrowRight className="ml-2 h-5 w-5 animate-pulse-slow" />
                </Button>

                <p className="text-center text-sm text-white/90">
                  Limited spots available. We typically respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
