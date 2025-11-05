"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { BookOpen } from "lucide-react";

const Guide = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzVyEle9VVzSWXXJW6UmvpEeMl6142Tgy64jpotmcQd105nNJUrpwmDrwgd7IjBzml9dQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        }
      );

      // Assume success (no-cors hides response)
      console.log("Success! Your guide is on its way to your inbox.");

      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error submitting the form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="mb-20 py-16 md:py-24 bg-black fade-in-section"
      id="free-guide"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-stretch bg-[#00FF8C] overflow-hidden transform transition-all">
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center mb-6">
              <div className="bg-coach-green/20 p-3">
                <BookOpen className="h-8 w-8 text-black" />
              </div>
              <span className="ml-4 text-sm font-semibold uppercase tracking-wider bg-black/20 px-4 py-1.5">
                Free Guide
              </span>
            </div>

            <h2 className="font-clash text-3xl md:text-4xl font-bold mb-6 leading-tight">
              "The Coach's Ultimate Funnel Blueprint"
            </h2>

            <p className="text-xl mb-8 text-gray-800">
              Steal our proven 5-step funnel framework that's helped coaches
              double their client bookings without spending more time on
              marketing.
            </p>

            <div className="mb-6">
              <img
                src="https://cdn.dribbble.com/users/1519999/screenshots/5116547/media/a37ddac40b2619ec2797043ab17fdbb7.gif"
                alt="Funnel blueprint animation"
                className="h-48 object-cover w-full"
              />
            </div>

            <ul className="mb-6 space-y-4">
              {[
                "The exact funnel structure top coaches are using",
                "Copy templates for high-converting landing pages",
                "Email sequence that turns leads into clients",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-black/20 p-1.5 rounded-full mt-0.5">
                    <svg
                      className="h-4 w-4 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <h3 className="font-clash text-2xl font-bold mb-6">
                Get Your Free Guide
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1 text-gray-800"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded-none pl-4 h-12 border-coach-green/30 focus:border-coach-green transition-all duration-300 bg-coach-green/5"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1 text-gray-800"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-none pl-4 h-12 border-coach-green/30 focus:border-coach-green transition-all duration-300 bg-coach-green/5"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#00FF8C] hover:bg-[#0bf88d] text-black font-medium text-lg py-6 rounded-none transition-all duration-300 hover:-translate-y-1 animate-subtle-pulse"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Me The Guide"}
                </Button>

                <p className="text-xs text-center text-gray-600 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
