// "use client";
// import Image from "next/image";
// import React from "react";
// import { useTranslation } from "react-i18next";
// import { StressFree } from "./StressFree";
// import { Testimonials } from "./Testimonials";

// const images = {
//   "1": {
//     src: "/gallery/1.png",
//     alt: "Salad Pouring",
//     title: "Salad Pouring",
//     desc: "Salad Pouring Description",
//   },
//   "2": {
//     src: "/gallery/2.png",
//     alt: "Outdoor Table",
//     title: "Outdoor Table",
//     desc: "",
//   },
//   "3": {
//     src: "/gallery/3.png",
//     alt: "Serving Dish",
//     title: "Serving Dish",
//     desc: "",
//   },
//   "4": { src: "/gallery/4.jpg", alt: "Buffet 1", title: "Buffet 1", desc: "" },
//   "5": { src: "/gallery/5.jpg", alt: "Buffet 2", title: "Buffet 2", desc: "" },
//   "6": { src: "/gallery/6.png", alt: "Buffet 3", title: "Buffet 3", desc: "" },
//   "7": {
//     src: "/gallery/6.1.jpg",
//     alt: "Food Box",
//     title: "Food Box",
//     desc: "",
//   },
//   "8": {
//     src: "/gallery/7.png",
//     alt: "Food Dish",
//     title: "Food Dish",
//     desc: "",
//   },
//   "9": {
//     src: "/gallery/8.jpg",
//     alt: "Holding Plate",
//     title: "Holding Plate",
//     desc: "",
//   },
//   "10": {
//     src: "/gallery/9.jpg",
//     alt: "Charcuterie",
//     title: "Charcuterie",
//     desc: "",
//   },
//   "11": {
//     src: "/gallery/10.jpg",
//     alt: "Dessert Platter",
//     title: "Dessert Platter",
//     desc: "",
//   },
//   "12": {
//     src: "/gallery/11.jpg",
//     alt: "Food Platter",
//     title: "Food Platter",
//     desc: "",
//   },
// };

// const GalleryImage = ({ image }: { image: any }) => {
//   return (
//     <>
//       <Image
//         width={720}
//         height={720}
//         src={image.src}
//         alt={image.alt}
//         className="w-full h-full object-cover rounded-sm shadow-sm"
//       />
//       <div className="absolute bottom-10  left-0 top-0 right-0 w-full h-full bg-black/50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm">
//         <h5 className="text-2xl font-semibold text-white">{image.title}</h5>
//         <p className="text-white">{image.desc}</p>
//       </div>
//     </>
//   );
// };

// // --- RecentWorks Component ---
// const RecentWorks: React.FC = () => {
//   const { t } = useTranslation();
//   return (
//     <section className="py-16 md:py-24 bg-[#F2EEE6]">
//       <div className="max-w-[1400px] mx-auto px-4 md:px-8">
//         <div className="grid grid-cols-12 gap-6 auto-rows-min">
//           {/* --- ROW 1 --- */}

//           {/* Top Left - Vertical */}
//           <div className="col-span-12 md:col-span-3 row-span-2 relative h-[300px] md:h-[400px] group">
//             <GalleryImage image={images["1"]} />
//           </div>

//           {/* Top Center - Title */}
//           <div className="col-span-12 md:col-span-6 flex flex-col justify-center -mt-20 items-center text-center z-10 py-10 md:py-0">
//             <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-2">
//               {t("gallery.recentTitle")}
//             </h2>
//             <span className="text-4xl md:text-6xl text-orange-500 font-semibold">
//               {t("gallery.recentTitleSpan")}
//             </span>
//             <p className="text-gray-900 mt-4 text-sm tracking-wide">
//               {t("gallery.recentDesc")}
//             </p>
//           </div>

//           {/* Top Right - Square */}
//           <div className="col-span-12 md:col-span-3 relative h-[250px] md:h-[300px] self-start md:mt-[-50px]">
//             <Image
//               width={720}
//               height={720}
//               src="/gallery/2.png"
//               alt="Outdoor Table"
//               className="w-full h-full object-cover rounded-sm shadow-sm"
//             />
//           </div>

//           {/* --- ROW 2 (Middle Complex Block) --- */}

//           {/* Far Left - Woman holding dish (Tall) */}
//           <div className="col-span-12 md:col-span-3 relative h-[400px] md:h-[500px] md:-mt-20">
//             <Image
//               width={720}
//               height={720}
//               src="/gallery/3.png"
//               alt="Serving Dish"
//               className="w-full h-full object-cover rounded-sm shadow-sm"
//             />
//           </div>

//           {/* Center Block (Col 4-9) - 6 Columns internal */}
//           <div className="col-span-12 md:col-span-6 grid grid-cols-6 gap-6 h-fit">
//             {/* 3 Small Images in a Row */}
//             <div className="col-span-2 h-[150px] md:h-[180px]">
//               <Image
//                 width={720}
//                 height={720}
//                 src="/gallery/4.jpg"
//                 alt="Buffet 1"
//                 className="w-full h-full object-cover rounded-sm shadow-sm"
//               />
//             </div>
//             <div className="col-span-2 h-[150px] md:h-[180px]">
//               <Image
//                 width={720}
//                 height={720}
//                 src="/gallery/5.jpg"
//                 alt="Buffet 2"
//                 className="w-full h-full object-cover rounded-sm shadow-sm"
//               />
//             </div>
//             <div className="col-span-2 h-[150px] md:h-[180px]">
//               <Image
//                 width={720}
//                 height={720}
//                 src="/gallery/6.png"
//                 alt="Buffet 3"
//                 className="w-full h-full object-cover rounded-sm shadow-sm"
//               />
//             </div>

//             {/* Row 2 of Center Block */}
//             {/* Left: Square */}
//             <div className="col-span-3 h-[250px] md:h-[280px]">
//               <Image
//                 width={720}
//                 height={720}
//                 src="/gallery/6.1.jpg"
//                 alt="Food Box"
//                 className="w-full h-full object-cover rounded-sm shadow-sm"
//               />
//             </div>
//             {/* Right: Wide */}
//             <div className="col-span-3 h-[250px] md:h-[280px]">
//               <Image
//                 width={720}
//                 height={720}
//                 src="/gallery/7.png"
//                 alt="Food Dish"
//                 className="w-full h-full object-cover rounded-sm shadow-sm"
//               />
//             </div>
//           </div>

//           {/* Far Right - Woman holding plate (Tall) */}
//           <div className="col-span-12 md:col-span-3 relative h-[350px] md:h-[450px] md:mt-20">
//             <Image
//               width={720}
//               height={720}
//               src="/gallery/8.jpg"
//               alt="Holding Plate"
//               className="w-full h-full object-cover rounded-sm shadow-sm"
//             />
//           </div>

//           {/* --- ROW 3 (Bottom) --- */}

//           {/* Bottom Left - Vertical */}
//           <div className="col-span-12 md:col-span-4 h-[350px] md:h-[450px]">
//             <Image
//               width={720}
//               height={720}
//               src="/gallery/9.jpg"
//               alt="Charcuterie"
//               className="w-full h-full object-cover rounded-sm shadow-sm"
//             />
//           </div>

//           {/* Bottom Center - Small Square */}
//           <div className="col-span-12 md:col-span-3 h-[200px] md:h-[250px]">
//             <Image
//               width={720}
//               height={720}
//               src="/gallery/10.png"
//               alt="Small Bites"
//               className="w-full h-full object-cover rounded-sm shadow-sm"
//             />
//           </div>

//           {/* Bottom Right - Large Vertical/Landscape */}
//           <div className="col-span-12 md:col-span-5 h-[400px] md:h-[500px] md:-mt-20">
//             <Image
//               width={720}
//               height={720}
//               src="/gallery/3.png"
//               alt="Feast Table"
//               className="w-full h-full object-cover rounded-sm shadow-sm"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- Main App Component ---
// function GalleryPage() {
//   return (
//     <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
//       <RecentWorks />
//       <Testimonials />
//       <StressFree />
//     </div>
//   );
// }

// export default GalleryPage;

"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { StressFree } from "./StressFree";
import { Testimonials } from "./Testimonials";
import { GalleryImage } from "./GalleryImage";

export const images = {
  "1": {
    src: "/gallery/1.png",
    alt: "Salad Pouring",
    title: "Salad Pouring",
    desc: "Salad Pouring Description",
  },
  "2": {
    src: "/gallery/2.png",
    alt: "Outdoor Table",
    title: "Outdoor Table",
    desc: "Outdoor Table Description",
  },
  "3": {
    src: "/gallery/3.png",
    alt: "Serving Dish",
    title: "Serving Dish",
    desc: "Serving Dish Description",
  },
  "4": {
    src: "/gallery/4.jpg",
    alt: "Buffet 1",
    title: "Buffet 1",
    desc: "Buffet 1 Description",
  },
  "5": {
    src: "/gallery/5.jpg",
    alt: "Buffet 2",
    title: "Buffet 2",
    desc: "Buffet 2 Description",
  },
  "6": {
    src: "/gallery/6.png",
    alt: "Buffet 3",
    title: "Buffet 3",
    desc: "Buffet 3 Description",
  },
  "7": {
    src: "/gallery/6.1.jpg",
    alt: "Food Box",
    title: "Food Box",
    desc: "Food Box Description",
  },
  "8": {
    src: "/gallery/7.png",
    alt: "Food Dish",
    title: "Food Dish",
    desc: "Food Dish Description",
  },
  "9": {
    src: "/gallery/8.jpg",
    alt: "Holding Plate",
    title: "Holding Plate",
    desc: "Holding Plate Description",
  },
  "10": {
    src: "/gallery/9.jpg",
    alt: "Charcuterie",
    title: "Charcuterie",
    desc: "Charcuterie Description",
  },
  "11": {
    src: "/gallery/10.png", // ← fix if you have 10.jpg instead of .png
    alt: "Dessert Platter",
    title: "Dessert Platter",
    desc: "Dessert Platter Description",
  },
  "12": {
    src: "/gallery/11.jpg",
    alt: "Food Platter",
    title: "Food Platter",
    desc: "Food Platter Description",
  },
  // Add these if you actually have the files
  "13": {
    src: "/gallery/12.jpg",
    alt: "Diplomatic Dinner",
    title: "Diplomatic Dinner",
    desc: "Diplomatic Dinner Description",
  },
  "14": {
    src: "/gallery/13.jpg",
    alt: "Private Estate",
    title: "Private Estate",
    desc: "Private Estate Description",
  },
};

// ── Recent Works ────────────────────────────────────────────────
const RecentWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-[#F2EEE6]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 gap-5 md:gap-6 auto-rows-fr">
          {/* Row 1 */}
          <div className="col-span-12 md:col-span-3 row-span-2 min-h-[320px] md:min-h-[420px]">
            <GalleryImage imageKey="1" />
          </div>

          <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center text-center py-10 md:py-0">
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-2">
              {t("gallery.recentTitle")}
            </h2>
            <span className="text-4xl md:text-6xl text-orange-500 font-semibold">
              {t("gallery.recentTitleSpan")}
            </span>
            <p className="text-gray-900 mt-4 text-sm tracking-wide max-w-xl">
              {t("gallery.recentDesc")}
            </p>
          </div>

          <div className="col-span-12 md:col-span-3 min-h-[260px] md:min-h-[320px]">
            <GalleryImage imageKey="2" />
          </div>

          {/* Row 2 */}
          <div className="col-span-12 md:col-span-3 min-h-[380px] md:min-h-[520px]">
            <GalleryImage imageKey="3" />
          </div>

          <div className="col-span-12 md:col-span-6 grid grid-cols-6 gap-5 md:gap-6">
            <div className="col-span-2 min-h-[160px] md:min-h-[190px]">
              <GalleryImage imageKey="6" />
            </div>
            <div className="col-span-2 min-h-[160px] md:min-h-[190px]">
              <GalleryImage imageKey="5" />
            </div>
            <div className="col-span-2 min-h-[160px] md:min-h-[190px]">
              <GalleryImage imageKey="6" />
            </div>

            <div className="col-span-3 min-h-[260px] md:min-h-[300px]">
              <GalleryImage imageKey="7" />
            </div>
            <div className="col-span-3 min-h-[260px] md:min-h-[300px]">
              <GalleryImage imageKey="8" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 min-h-[380px] md:min-h-[480px]">
            <GalleryImage imageKey="9" />
          </div>

          {/* Row 3 */}
          <div className="col-span-12 md:col-span-4 min-h-[360px] md:min-h-[460px]">
            <GalleryImage imageKey="10" />
          </div>

          <div className="col-span-12 md:col-span-3 min-h-[220px] md:min-h-[270px]">
            <GalleryImage imageKey="11" />
          </div>

          <div className="col-span-12 md:col-span-5 min-h-[420px] md:min-h-[520px]">
            <GalleryImage imageKey="12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <RecentWorks />
      <Testimonials /> {/* ← keep your original or slightly cleaned version */}
      <StressFree /> {/* ← keep your original */}
    </div>
  );
}
