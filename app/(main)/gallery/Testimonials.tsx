import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

// --- Testimonials Component ---
export const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#403D3D] lg:py-20 md:py-32 lg:pb-40 md:pb-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="flex justify-center mb-4 text-green-500">
            <Sparkles size={40} strokeWidth={1} />
          </div>
          <h2 className="text-5xl md:text-7xl font-semibold text-white mb-2 leading-tight">
            {t("gallery.voiceLabel")} <br />
            <span className="text-orange text-6xl md:text-8xl relative block mt-2">
              {t("gallery.voiceSpan")}
            </span>
          </h2>
        </div>

        {/* Testimonial 1: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24 md:mb-32">
          <div className="w-full md:w-1/2 md:pr-12 order-2 md:order-1 bg-white/10 lg:lg:py-32 py-16 border-l-4 border-orange ">
            <div className="pl-8 py-2 relative">
              <p className=" text-xl md:text-2xl text-white italic leading-relaxed mb-8">
                {t("gallery.testimonials.1.text")}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-orange"></div>
                <div>
                  <h4 className="text-white  text-lg tracking-wide">
                    {t("gallery.testimonials.1.author")}
                  </h4>
                  <p className="text-white text-xs uppercase tracking-widest mt-1">
                    {t("gallery.testimonials.1.role")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative order-1 md:order-2 group">
            <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <Image
              width={720}
              height={720}
              src="/gallery/11.jpg"
              alt="Event Setup"
              className="w-full h-full object-cover relative z-10 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Testimonial 2: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24 md:mb-32">
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative group">
            <div className="absolute inset-0 border border-white/10 -translate-x-4 translate-y-4 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <Image
              width={720}
              height={720}
              src="/gallery/12.jpg"
              alt="Diplomatic Dinner"
              className="w-full h-full object-cover relative z-10 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12 border-l-4 border-orange bg-white/10 lg:py-32 py-16">
            <div className="pl-8 py-2">
              <p className=" text-xl md:text-2xl text-white italic leading-relaxed mb-8">
                {t("gallery.testimonials.2.text")}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-orange"></div>
                <div>
                  <h4 className="text-white  text-lg tracking-wide">
                    {t("gallery.testimonials.2.author")}
                  </h4>
                  <p className="text-white text-xs uppercase tracking-widest mt-1">
                    {t("gallery.testimonials.2.role")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 3: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 md:pr-12 order-2 md:order-1 border-l-4 border-orange bg-white/10 lg:py-32 py-16">
            <div className="pl-8 py-2">
              <p className=" text-xl md:text-2xl text-white italic leading-relaxed mb-8 w-[80%]">
                {t("gallery.testimonials.3.text")}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-orange"></div>
                <div>
                  <h4 className="text-white  text-lg tracking-wide">
                    {t("gallery.testimonials.3.author")}
                  </h4>
                  <p className="text-white text-xs uppercase tracking-widest mt-1">
                    {t("gallery.testimonials.3.role")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative order-1 md:order-2 group">
            <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <Image
              width={720}
              height={720}
              src="/gallery/13.jpg"
              alt="Private Estate"
              className="w-full h-full object-cover relative z-10 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
