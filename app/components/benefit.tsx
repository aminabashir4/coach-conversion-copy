import {
  Calendar,
  Briefcase,
  Rocket,
  Zap,
  Users,
  CircleCheck,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: <Calendar className="h-6 w-6 text-white" />,
    title: "More Client Bookings",
    description:
      "Convert more leads into paying clients with proven funnel systems tailored for coaches.",
    checkText: "Book more clients consistently",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-white" />,
    title: "Simplified Tech",
    description:
      "No more wrestling with complicated tools. We handle all the technical setup for you.",
    checkText: "Focus only on coaching",
  },
  {
    icon: <Rocket className="h-6 w-6 text-white" />,
    title: "Done-For-You Setup",
    description:
      "From funnel creation to email automation, we handle everything so you can focus on coaching.",
    checkText: "Launch effortlessly",
  },
  {
    icon: <Zap className="h-6 w-6 text-white" />,
    title: "Lead Automation",
    description:
      "Automatically capture, nurture, and convert leads—even while you're sleeping or coaching.",
    checkText: "Capture and convert leads 24/7",
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "Better Client Experience",
    description:
      "Create a smooth, professional journey from prospect to happy, paying client.",
    checkText: "Deliver a professional experience",
  },
  {
    icon: <CircleCheck className="h-6 w-6 text-white" />,
    title: "Measurable Results",
    description:
      "Track your performance with clear metrics and optimize for even better conversion rates.",
    checkText: "See exactly what’s working",
  },
];

const Benefits = () => {
  return (
    <section
      className="py-16 md:py-24 bg-[#132528] fade-in-section"
      id="benefits"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-clash text-3xl md:text-4xl font-bold mb-4  text-white uppercase">
            Benefits That Transform Your Business
          </h2>
          <p className="text-xl text-white opacity-80 max-w-3xl mx-auto">
            Our systems do more than generate leads—they build a sustainable
            coaching business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border-coach-green p-8  border  shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl  flex items-center justify-center mb-4 shadow-md">
                {benefit.icon}
              </div>

              <h3 className="font-clash text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-white opacity-80 mb-4">
                {benefit.description}
              </p>

              <div className="flex items-center bg-[#C0E247] text-[#132528] text-sm border border-[#C0E247] px-4 py-2">
                <Check className="h-4 w-4 text-[#132528] mr-2" />
                {benefit.checkText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
