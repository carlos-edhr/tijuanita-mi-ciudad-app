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
    description:
      "Ocupación temporal de vialidades para el uso recreativo y seguro fomentando la convivencia, el esparcimiento y la movilidad activa",
    buttonText: "Reporte",
    color: "#FF6B6B",
    delay: 0.1,
    image: "/videos/hero1.mp4",
    file: "/documentos/hero-reporte.pdf", // Archivo PDF para el primer botón
  },
  {
    title: "Convocatoria",
    description: "Colorear al capibara de la vía recreativa de verano",
    buttonText: "Ver Convocatoria",
    color: "#4ECDC4",
    delay: 0.2,
    image: "/images/landing/hero2.webp",
    file: "/documentos/hero-2.pdf", // Imagen para el segundo botón
  },
  {
    title: "Próximas actividades",
    description: "Conoce nuestras próximas actividades de entrada libre",
    buttonText: "Participa",
    color: "#FFCC5C",
    delay: 0.3,
    image: "/images/landing/hero3.jpg",
    file: "/documentos/hero3.pdf", // PDF para el tercer botón
  },
];

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
                {/* Sección de imagen o video */}
                <div className="relative h-86 overflow-hidden">
                  {index === 0 ? (
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-auto h-auto"
                      poster={card.image}
                    >
                      <source
                        src={card.image.replace(".png", ".mp4")}
                        type="video/mp4"
                      />
                      Tu navegador no soporta el video.
                    </video>
                  ) : (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-auto h-auto"
                    />
                  )}
                  {/* Gradiente de overlay */}
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
                  <CardDescription className="text-sm text-blackOlive">
                    {card.description}
                  </CardDescription>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6"
                  >
                    <Button
                      className="w-full rounded-xl py-6 text-lg font-bold text-white transition-all hover:bg-white/30"
                      style={{ backgroundColor: card.color }}
                      onClick={() => {
                        const isPdf = card.file.endsWith(".pdf");
                        window.open(
                          card.file,
                          "_blank",
                          `noopener,noreferrer${isPdf ? ",width=800,height=600" : ""}`,
                        );
                      }}
                    >
                      {card.buttonText}
                    </Button>
                  </motion.div>
                </CardContent>
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
