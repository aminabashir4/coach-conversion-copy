"use client";

const images = [
  "/images/Screenshot 2025-07-15 at 12.57.33 PM.png",
  "/images/Screenshot 2025-07-15 at 1.00.12 PM.png",
  "/images/Screenshot 2025-07-15 at 1.06.56 PM.png",
  "/images/Screenshot 2025-07-15 at 1.09.06 PM.png",
  "/images/Screenshot 2025-07-15 at 1.13.51 PM.png",
  "/images/Screenshot 2025-07-15 at 1.21.17 PM.png",
  "/images/Screenshot 2025-07-15 at 1.27.10 PM.png",
  "/images/Screenshot 2025-07-15 at 1.30.20 PM.png",
  "/images/Screenshot 2025-07-15 at 1.43.06 PM.png",
  "/images/Screenshot 2025-07-15 at 12.43.54 PM.png",
  "/images/Screenshot 2025-07-15 at 12.50.43 PM.png",
  "/images/Screenshot 2025-07-15 at 12.54.56 PM.png",
];

const ImageRow = ({ direction }: { direction: "left" | "right" }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <div
        className={`flex gap-3 ${
          direction === "left" ? "animate-slide-left" : "animate-slide-right"
        }`}
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="w-auto h-[300px] rounded-xl overflow-hidden border shadow-md shrink-0"
          >
            <img
              src={src}
              alt={`Coach ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="py-10 mb-20 ">
      <div className="text-center mb-12 px-4">
        <h2 className="font-clash text-3xl md:text-4xl font-bold mb-2">
          Meet Our Coaches
        </h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Discover inspiring individuals leading with impact and vision.
        </p>
      </div>

      {/* Top Row */}
      <ImageRow direction="left" />

      {/* Bottom Row */}
      <div className="mt-6">
        <ImageRow direction="right" />
      </div>
    </section>
  );
};

export default Testimonial;
