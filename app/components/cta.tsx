export default function Cta() {
  return (
    <section className="w-full mb-10">
      <div className="max-w-[1300px] bg-black mx-auto px-[25px] md:px-[102px] py-[21px] md:py-[84px]">
        <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              UNLOCK YOUR
              <br />
              TEAM&apos;S FULL
              <br />
              POTENTIAL
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-white text-lg">
              We have a limited number of Predictable Profits® Sales Mastery Strategy Sessions available.
            </p>
            <p className="text-white text-lg">
              Get started with a free, 30 minute discovery call and let&apos;s see what&apos;s possible.
            </p>
            <div>
              <a
                href="#"
                className="inline-block bg-[#00FF8C] hover:text-[#0bf88d] text-black  font-bold px-6 py-3 uppercase transition-colors"
              >
                Book Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
