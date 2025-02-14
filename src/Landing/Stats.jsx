import React from "react";
import { motion } from "framer-motion";

const corporateLogos = [
  "https://res.cloudinary.com/dmdiia2yv/image/upload/v1738602884/l_t_edutech_lfgybr.webp",
  "https://res.cloudinary.com/dmdiia2yv/image/upload/v1738602895/Retron-energy_orsw4s.png",
  "https://res.cloudinary.com/dmdiia2yv/image/upload/v1738602908/synixiaFBBANNER_zet8xi.jpg",
  "https://res.cloudinary.com/dmdiia2yv/image/upload/v1738602918/ICT-Academy-1024x423_babraz.webp",
  "https://res.cloudinary.com/dzymyjltu/image/upload/v1738603471/WhatsApp_Image_2025-02-03_at_22.54.24_8f282fea_hfnq2o.jpg",
];

const institutionalLogos = [
  "https://res.cloudinary.com/dmdiia2yv/image/upload/v1738603867/sbit_jbzmxk.jpg",
  "https://res.cloudinary.com/dmdiia2yv/image/upload/v1738603875/sree_chai_k0fnfu.jpg",
  "https://res.cloudinary.com/dmdiia2yv/image/upload/v1738603884/vasavi_k4qkqp.png",
  "https://res.cloudinary.com/dmdiia2yv/image/upload/v1738603894/lords_kleczp.png",
  "https://res.cloudinary.com/dmdiia2yv/image/upload/v1738603902/vaagdevi_qo6vpc.png",
  "https://res.cloudinary.com/dmdiia2yv/image/upload/v1738603910/klu_kdbw2y.png",
  "https://res.cloudinary.com/dmdiia2yv/image/upload/v1738603919/parul_llvpg7.png",
  "https://res.cloudinary.com/dmdiia2yv/image/upload/v1738603927/BVRIT-engineering-technology-college-logo-narsapur_wpzkxj.webp",
  "https://res.cloudinary.com/dmdiia2yv/image/upload/v1738603936/mgit_n1j03l.png",
  "https://res.cloudinary.com/dfu5ffbnk/image/upload/v1738656852/psna_swa59q.png",
  "https://res.cloudinary.com/dmdiia2yv/image/upload/v1738603960/BIET_logo_gjkoid.png",
  "https://res.cloudinary.com/dmdiia2yv/image/upload/v1738604024/drk_2_osxieb.png",
];

const Marquee = ({ logos, direction }) => {
  return (
    <motion.div
      className="overflow-hidden w-full py-4"
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="flex gap-8 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"], 
        }}
        transition={{
          ease: "linear",
          duration: 20, 
          repeat: Infinity,
          repeatType: "loop", 
        }}
      >
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Partner Logo"
            className="h-20 w-20 object-contain"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

const LogoSection = ({ title, logos, animate }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-2">{title}</h2>
      {animate ? (
        <Marquee logos={logos} direction="left" />
      ) : (
        <div className="flex justify-center gap-8">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Partner Logo"
              className="h-20 w-20 object-contain"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function CollegeCarousel() {
  return (
    <div className="bg-gray-100 p-6 space-y-6">
      {/* Corporate Partners Section */}
      <LogoSection title="International and Corporate Partners" logos={corporateLogos} animate={false} />

      {/* Institutional Partners Section */}
      <LogoSection title="Institutional Partners" logos={institutionalLogos} animate={true} />
    </div>
  );
}