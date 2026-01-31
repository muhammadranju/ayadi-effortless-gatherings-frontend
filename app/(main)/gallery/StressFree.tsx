import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa6";

// --- StressFree Component ---
export const StressFree: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-green-500 lg:py-40 my-16 md:py-32 py-24 lg:my-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Image
          width={720}
          height={720}
          src="/bg/gallery-2.png"
          className=" h-full object-cover absolute"
          alt=""
        />
        <Image
          width={720}
          height={720}
          src="/bg/gallery-1.png"
          className=" h-full object-cover right-0 absolute"
          alt=""
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <Image width={720} height={720} src="/bg/gallery-bg.png" alt="" />
        <h2 className="text-4xl md:text-6xl  text-white mb-6 tracking-wide leading-tight">
          {t("gallery.stressFreeTitle")}
        </h2>
        <p className="text-white/90 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          {t("gallery.stressFreeDesc")}
        </p>
        <Link href={"https://wa.me/966506464065"} target="_blank">
          <button className="bg-orange-700 hover:bg-orange-600 text-white px-8 py-3 rounded-sm font-medium transition-colors duration-300 flex items-center gap-2 mx-auto cursor-pointer">
            {t("gallery.whatsapp")} <FaWhatsapp size={24} />
          </button>
        </Link>
      </div>
    </section>
  );
};
