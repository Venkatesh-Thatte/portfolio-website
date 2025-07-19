import React from "react";

function Certifications({}: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent px-6 md:px-12 py-16 relative mt-25">
      <h3 className="absolute top-16 md:top-10 uppercase tracking-[15px] text-gray-500 text-xl md:text-2xl z-30">
        Certifications
      </h3>

      <div className="bg-[#1f1f1f] mt-32  md:mt-28 p-6 md:p-10 rounded-2xl shadow-lg w-full flex flex-col md:flex-row items-center gap-8">
        <img
          src="/images/JS certificate.png"
          alt="JavaScript Certificate"
          className="w-full md:w-[50%] shadow-md object-contain"
        />

        <div className="text-gray-200 text-center md:text-left space-y-4 mb-10">
          <h4 className="text-2xl font-semibold text-[#F7AB0A]">
            JavaScript Certification – Scaler
          </h4>
          <p className="text-base md:text-lg leading-relaxed mt-10">
            Completed an in-depth JavaScript course offered by Scaler, covering
            essential programming concepts, advanced techniques, and practical
            problem-solving through hands-on challenges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
