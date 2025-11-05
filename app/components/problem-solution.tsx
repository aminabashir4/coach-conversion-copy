import { Check, CircleX } from "lucide-react";
import { cn } from "@/lib/utils";

const ProblemSolutionSection = () => {
  const problems = [
    "Spending hours on tech instead of actual coaching",
    "Having no reliable way to generate qualified leads",
    "Manually sending the same emails over and over",
    "Losing potential clients due to inconsistent follow-up",
  ];

  const solutions = [
    "Done-for-you funnels that convert visitors into clients",
    "Automated lead generation systems working 24/7",
    "Email sequences that nurture and convert on autopilot",
    "Tech setup handled 100% by our team of experts",
  ];

  return (
    <section className="py-16 md:py-24 bg-white fade-in-section" id="problems">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-clash text-3xl md:text-4xl font-bold mb-4 uppercase">
            The Tech Shouldn't Hold You Back
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Many coaches are amazing at helping clients but struggle with the
            systems needed to get those clients consistently.
          </p>
        </div>

        {/* Cards Side-by-Side on Desktop */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Card (Problems) */}
          <div className="bg-[#132528] border border-[#13252820] p-6 md:p-10 text-center w-full md:w-1/2 ">
            <h3 className="font-clash text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <CircleX className="text-white mr-3 h-8 w-8" />
              Without Proper Systems
            </h3>

            <div className="grid grid-cols-1 gap-6">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white px-6 py-4 border border-[#13252820] shadow-sm text-left "
                >
                  <CircleX className="text-[#132528] mt-1 mr-3 min-w-[20px]" />
                  <span className="text-gray-800 font-medium text-base">
                    {problem}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card (Solutions) */}
          <div className="bg-[#C0E247] border border-[#C0E24766] p-6 md:p-10 text-center w-full md:w-1/2 ">
            <h3 className="font-clash text-2xl font-bold text-white mb-8 flex items-center justify-center ">
              <Check className="text-white mr-3 h-7 w-7 " />
              With Our Solutions
            </h3>

            <div className="grid grid-cols-1 gap-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white px-6 py-4 border border-[#C0E24766] shadow-sm text-left "
                >
                  <Check className="text-[#C0E247] mt-1 mr-3 min-w-[20px]" />
                  <span className="text-gray-800 font-medium text-base">
                    {solution}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
