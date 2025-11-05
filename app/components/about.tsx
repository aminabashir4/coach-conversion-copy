import { cn } from "@/lib/utils";
import coachBook from "./../../public/images/the-predprof-playbook.webp";
import Image from "next/image";
const stats = [
  {
    value: "50+",
    label: "Coaches Helped",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "30%",
    label: "Avg. Client Growth",
  },
];

const About = () => {
  return (
    <section id="about" className="relative">
      {/* Top Half with Background */}
      <div className="bg-[#132528] pt-16 md:pt-24 pb-10 md:pb-32 relative z-10 mb-5 md:mb-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12">
            {/* Right: Text Content */}
            <div className="md:w-3/5 text-center md:text-left">
              <h2 className="font-clash text-3xl md:text-4xl font-bold mb-6 text-white">
                Meet Your System Strategist
              </h2>
              <p className="text-lg md:text-xl mb-4 md:mb-6 text-white">
                Hi, I'm Sarah (or your name). After 10+ years of helping coaches
                build systems that convert, I've seen firsthand how proper
                automation transforms coaching businesses.
              </p>
              <p className="text-lg md:text-xl mb-4 md:mb-6 text-white">
                Unlike general marketers, I specialize exclusively in systems for
                coaches, consultants, and course creators. I understand your unique
                challenges and have created a proven framework that reliably turns
                strangers into paying clients.
              </p>
              <p className="text-lg md:text-xl mb-4 md:mb-6 text-white">
                My clients typically see a 30-50% increase in booked calls within 60
                days of implementing our systems, all while spending less time on
                marketing and tech.
              </p>
            </div>

            {/* Left: Image */}
            <div className="md:w-2/5 w-full">
              <Image
                src={coachBook}
                alt="Coach portrait"
                className="rounded-3xl shadow-xl w-full h-auto hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats - Positioned Absolutely at Bottom Center */}
      <div className="static lg:absolute left-1/2 transform translate-x-0 md:-translate-x-1/2 bottom-24 w-full z-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-md text-center transform transition-all hover:-translate-y-2 hover:shadow-xl duration-300"
              >
                <p className="text-3xl md:text-4xl font-clash font-bold text-coach-green mb-2 md:mb-3">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-gray-800">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extra padding below to prevent overlap */}
      <div className="h-10 md:h-40"></div>
    </section>
  );
};

export default About;
