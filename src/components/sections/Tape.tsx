import { StarIcon } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

const words = [
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Reliable",
  "PWA",
  "SEO Optimized",
  "Offline-first Architecture",
  //   "Usable",
  //   "Reliable",
];

const Tape = () => {
  return (
    <section className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-linear-to-r from-amber-200 to-orange-400 -rotate-3 -mx-1">
        <div className="flex mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            direction="left"
          >
            <div className="flex flex-none gap-12 py-4">
              {words.map((word) => (
                <div
                  key={word}
                  className={`${words[0] === word ? "pl-12" : ""} inline-flex items-center gap-12`}
                >
                  <span className="text-gray-900 uppercase font-extrabold text-sm">
                    {word}
                  </span>
                  <StarIcon className="size-5 fill-gray-900 text-gray-900 -rotate-12" />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Tape;
