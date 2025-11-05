export default function Sales() {
  const concerns = [
    {
      id: 1,
      title: "I'M THE ONLY ONE WHO CAN CLOSE",
      description: [
        "Your sales team gets the skills and techniques needed to close deals. Part of this process involves standardizing your closing process. This ensures everyone has access to the same tools and knowledge, while also creating a sustainable model for long-term success.",
      ],
      opacity: "opacity-[0.80192]",
    },
    {
      id: 2,
      title: "I HAVE THE WRONG SALES TEAM",
      description: [
        "Our A-Player Acquisition Process helps you attract, hire, and onboard top sales talent — people who embody your company's values and are driven to succeed.",
        "Your team becomes an extension of you, closing deals and building relationships that fuel long-term growth.",
      ],
      opacity: "",
    },
    {
      id: 3,
      title: "I'M NOT SURE WHERE THE LEAKS ARE",
      description: [
        "Our Sales Process Audit helps you uncover exactly where in the pipeline prospects fall off — and why.",
        "With clarity, you can patch the holes and create a seamless path from lead to close.",
      ],
      opacity: "",
    },
  ];

  return (
    <section className="w-full bg-black text-white pt-[110px] px-4 md:px-12 mb-14 md:mb-32">
      <div className="mx-auto max-w-[1110px]">
        {/* Header */}
        <div className="text-center mb-4 pb-[30px]">
          <h2 className="text-4xl md:text-7xl font-bold mb-2">
            <span className="text-coach-green  ">YOUR SALES BOTTLENECKS</span>
            <br />
            <span className="text-[#F8FCEC]">SOLVED</span>
          </h2>
        </div>

        {/* Dynamic Concerns */}
        {concerns.map((concern) => (
          <div
            key={concern.id}
            className={`pt-10 pb-[25px] md:pb-[55px] border-b border-b-[#47656a] ${concern.opacity}`}
          >
            <div className="text-sm uppercase font-bold text-[#BECEB7] mb-4">
              Concern #{concern.id}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32">
              <div className="mb-10 md:mb-0">
                <h3 className="text-[38px] md:text-5xl leading-[100%] font-bold text-[#F8FCEC] mb-10 max-w-[417px]">
                  {concern.title}
                </h3>
                <a
                  href="#"
                  className="inline-block border text-[#F8FCEC] border-[#00FF8C] hover:bg-[#00FF8C] hover:text-black font-bold px-6 py-2.5 uppercase text-sm transition-colors"
                >
                  Book your free session
                </a>
              </div>
              <div>
                {concern.description.map((para, idx) => (
                  <p key={idx} className="text-[#E2E8F0] text-[21px] mb-4">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
