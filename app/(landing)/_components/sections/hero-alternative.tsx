"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const CARD_DATA = [
  {
    title: "Vía recreativa",
    description: "Vía recreativa",
    buttonText: "Reporte",
    color: "#FF6B6B",
    delay: 0.1,
    image: "/images/landing/hero1.png",
  },
  {
    title: "Convocatoria",
    description: " convocatoria",
    buttonText: "Ver Convocatoria",
    color: "#4ECDC4",
    delay: 0.2,
    image: "/images/landing/hero2.png",
  },
  {
    title: "Próximas actividades",
    description: "participa",
    buttonText: "Participa",
    color: "#FFCC5C",
    delay: 0.3,
    image: "/images/landing/hero3.png",
  },
];

// const LETTER_COLORS = [
//   "#FF6B6B",
//   "#4ECDC4",
//   "#45B7D1",
//   "#96CEB4",
//   "#FFEEAD",
//   "#FF9999",
//   "#88D8B0",
//   "#FFCC5C",
//   "#AAD8B0",
//   "#FF6F69",
//   "#4ECDC4",
//   "#45B7D1",
//   "#96CEB4",
//   "#FFEEAD",
//   "#FF9999",
//   "#88D8B0",
//   "#FFCC5C",
//   "#AAD8B0",
//   "#FF6F69",
//   "#4ECDC4",
//   "#45B7D1",
// ];

export function HeroAlternativeSection() {
  return (
    // Previous bg gradient bg-gradient-to-br from-[#4F46E5] to-[#22C55E]
    <section className="relative min-h-screen overflow-hidden bg-blancoHuesoFondo  px-4 pt-20 md:px-8">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-soft-light" />

      <div className="mx-auto max-w-7xl py-12 md:py-24">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.h1 className="font-kawaiiRT mb-6">
            <div className="md:inline-block">
              <h1 className="md:tracking-widest  font-outline-1 cursor-default inline-block text-4xl sm:text-5xl md:text-7xl lg:text-7xl">
                <span className="font-outline-1-morado text-moradoSecundario md:tracking-widest">
                  Tijuanita{" "}
                </span>{" "}
                <span className="text-aquamarine md:tracking-widest">mi </span>{" "}
                <span className="text-inchworm md:tracking-widest">ciudad</span>
              </h1>
              {/* <motion.span
                // key={index}
                // style={{ color: LETTER_COLORS[index] }}
                className="cursor-default inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {/* {letter === " " ? "\u00A0" : letter} */}
              {/* </motion.span> */}
              {/* </div>
            <div className="block md:inline-block">
              {title.slice(mobileBreakIndex).map((letter, index) => (
                <motion.span
                  key={index + mobileBreakIndex}
                  style={{ color: LETTER_COLORS[index + mobileBreakIndex] }}
                  className="cursor-default inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span> */}
            </div>
          </motion.h1>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {CARD_DATA.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: card.delay }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="h-full overflow-hidden rounded-3xl border-4 border-white/20 bg-white/10 backdrop-blur-lg shadow-2xl">
                {/* Image Section */}
                <div className="relative h-86 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-auto h-auto"
                  />
                  {/* Image overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                    style={{
                      background: `linear-gradient(to top, ${card.color}30 0%, transparent 70%)`,
                    }}
                  />
                </div>

                <CardContent className="p-8 text-center relative z-10">
                  <CardTitle
                    className="mb-4 text-3xl font-bold"
                    style={{ color: card.color }}
                  >
                    {card.title}
                  </CardTitle>
                  {/* <CardDescription className="text-xl font-semibold text-white">
                    {card.description}
                  </CardDescription> */}

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6"
                  >
                    <Button
                      className="w-full rounded-xl  py-6 text-lg font-bold text-white  transition-all hover:bg-white/30"
                      style={{ backgroundColor: card.color }}
                    >
                      {card.buttonText}
                    </Button>
                  </motion.div>
                </CardContent>

                {/* Animated elements */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-6 -top-6 h-24 w-24 rounded-full"
                  style={{
                    backgroundColor: card.color + "20",
                    border: `4px solid ${card.color}20`,
                    zIndex: -1,
                  }}
                />
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full"
                  style={{
                    backgroundColor: card.color + "20",
                    border: `4px solid ${card.color}20`,
                    zIndex: -1,
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating elements in background */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-[#FF6B6B]/20"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-1/4 bottom-1/4 h-40 w-40 rounded-3xl border-4 border-[#4ECDC4]/20"
      />
    </section>
  );
}
