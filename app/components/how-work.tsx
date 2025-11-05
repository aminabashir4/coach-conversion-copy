
'use client'
import { 
  CircleChevronRight, 
  MessageCircle, 
  Laptop, 
  Rocket, 
  ArrowRight 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface StepCardProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const StepCard = ({ icon, number, title, description, isLast = false }: StepCardProps) => {
  return (
    <div className="relative flex flex-col md:flex-row items-start fade-in-section" style={{ animationDelay: `${number * 150}ms` }}>
      <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center text-[#00FF8C] font-clash font-bold text-2xl relative z-10 shadow-md">
        {number}
      </div>
      
      {!isLast && (
        <div className="absolute left-8 top-16 w-0.5 h-0 md:h-[calc(50%+2rem)] bg-linear-to-b from-[#00FF8C] to-gray-200 -z-10" />
      )}
      
      <div className="md:ml-8 mt-6 md:mt-0 pb-12 md:pb-20 flex flex-row md:flex-col gap-x-4">
        <div className="bg-[#00FF8C]/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-sm ">
          {icon}
        </div>
        <div>
        <h3 className="font-clash text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-800 max-w-md">{description}</p>
      </div>
      </div>
    </div>
  );
};

const HowWork = () => {
  const steps = [
    {
      icon: <MessageCircle className="h-8 w-8 text-[#00FF8C]" />,
      title: "Discovery Call",  
      description: "We learn about your coaching business, goals, and current challenges to map out the perfect solution."
    },
    {
      icon: <Laptop className="h-8 w-8 text-[#00FF8C]" />,
      title: "Custom Funnel Setup",
      description: "Our team creates your personalized lead generation funnel, landing pages, and email sequences."
    },
    {
      icon: <Rocket className="h-8 w-8 text-[#00FF8C]" />,
      title: "Automation Implementation",
      description: "We connect all systems and automations so leads flow seamlessly through your business."
    },
    {
      icon: <CircleChevronRight className="h-8 w-8 text-[#00FF8C]" />,
      title: "Growth & Optimization",
      description: "Regular check-ins and optimizations ensure your funnel continually improves and scales with your business."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white fade-in-section" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-clash text-3xl md:text-4xl font-bold mb-4 uppercase ">How We Work Together</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            A simple, proven process to get your coaching business fully automated without the headaches.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <StepCard 
              key={index}
              icon={step.icon}
              number={index + 1}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-black hover:bg-black/90 text-white font-medium text-lg px-8 py-6 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-subtle-pulse"
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 animate-pulse-slow" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
