import {
  Star,
  TrendingUp,
  Rocket,
  Target,
  Users,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="w-8 h-8 text-[#C0E247]" />,
    title: "35%+ Higher Conversions",
    description:
      "Data-driven funnels that consistently beat industry benchmarks.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-[#C0E247]" />,
    title: "AI-Powered Automation",
    description: "24/7 lead qualification, nurturing, and closing—hands-free.",
  },
  {
    icon: <Target className="w-8 h-8 text-[#C0E247]" />,
    title: "Enterprise-Grade Security",
    description: "Bank-level protection with ongoing support & optimization.",
  },
];

export default function Hero() {
  return (
    <section className="w-full bg-gray-50 py-24 px-4">
      <div className="container mx-auto max-w-full md:max-w-6xl">
        {/* Top tagline */}
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-[#132528] ">
            Expert in Sales Funnels • AI Automation • Web Development
          </p>
        </div>

        {/* Main headline */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#132528] uppercase">
            Transform Ideas Into{" "} <br />
            <span className="bg-gradient-to-r from-[#C0E247] via-[#C0E247] to-[#C0E247] bg-clip-text text-transparent">
              Revenue Machines
            </span>
            <br />
            That <span className="text-[#C0E247]">Scale</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-8 max-w-full md:max-w-2xl mx-auto">
          <p className="text-lg text-[#132528] opacity-70 leading-relaxed">
            High-converting funnels, 24/7 AI automation, and enterprise-grade
            web apps that turn your vision into predictable, scalable profit.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#C0E247] hover:bg-[#b3d93d] text-[#132528] px-5 md:px-8 py-3  font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Your Free Strategy Call →
            </button>
            <button className="border border-[#C0E247] text-[#132528] px-8 py-3  font-semibold hover:bg-[#f7fbe7] transition-all duration-200">
              View My Services
            </button>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 md:gap-10 text-base text-[#132528]">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]"
                  />
                ))}
              </div>
              <span className="font-semibold">5.0 Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#132528]" />
              <span>
                <strong className="font-bold text-black">150+</strong> Startups
                Served
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#132528]" />
              <span>
                <strong className="font-bold text-black">+45%</strong> Avg.
                Conversion Boost
              </span>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#132528] p-6 shadow-sm border border-gray-100 text-center transform transition duration-300 ease-in-out hover:-translate-y-2"
            >
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white uppercase mb-2">
                {feature.title}
              </h3>
              <p className="text-white opacity-70 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
