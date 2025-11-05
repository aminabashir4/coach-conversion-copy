const comparisonData = [
  {
    icon: "/images/star.svg",
    title: (
      <>
        THEY FOCUS ON TACTICS.
        <br />
        WE BUILD SYSTEMS.
      </>
    ),
    description:
      "Most coaches push the latest marketing trends or sales scripts that only create temporary spikes. We install a complete Growth System that's designed to generate predictable results month after month, year after year.",
  },
  {
    icon: "/images/arrow.svg",
    title: (
      <>
        THEY OFFER ONE-SIZE.
        <br />
        WE MEET YOU WHERE YOU ARE.
      </>
    ),
    description:
      "From agencies under $1M to those beyond $10M, we've built specialized programs with frameworks, coaching, and communities specific to your revenue stage challenges.",
  },
  {
    icon: "/images/book.svg",
    title: (
      <>
        THEY PROVIDE ADVICE.
        <br />
        WE ENSURE IMPLEMENTATION.
      </>
    ),
    description:
      "Generic advice without accountability creates zero change. Our structured implementation frameworks and coaching ensure you actually execute the strategies that drive predictable growth.",
  },
];

const Comparison = () => {
  return (
    <div className="w-full bg-[#132528] py-16 md:py-24 px-4">
      <div className="max-w-[1160px] mx-auto">
        <div className="relative mb-16 md:mb-24">
          <h2 className="text-center text-coach-green text-3xl md:text-5xl font-bold leading-tight relative z-10 ">
            WHY MOST AGENCY COACHING FAILS (AND WHY WE'RE DIFFERENT)
          </h2>
          <div className="hidden md:block absolute right-0 md:right-72 -bottom-2 md:-bottom-5 rotate-12">
            <img src="/images/element.svg" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {comparisonData.map((item, index) => (
            <div key={index} className="space-y-2 md:space-y-4">
              <div className="text-coach-green mb-6">
                <img src={item.icon} alt="" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white uppercase mb-4">
                  {item.title}
                </h3>
                <p className="text-white text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comparison;
