"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Play } from "lucide-react";
import Link from "next/link";

const galleryItems = [
  {
    type: "image",
    src: "/gallery/image1.png",
    alt: "Niños en taller de pintura",
  },
  {
    type: "video",
    src: "/gallery/video1.mp4",
    thumbnail: "/gallery/thumb1.jpg",
  },
  {
    type: "image",
    src: "/gallery/image3.png",
    alt: "Familia en vía recreativa",
  },
  {
    type: "image",
    src: "/gallery/image2.png",
    alt: "Evento de lectura al aire libre",
  },
  { type: "image", src: "/gallery/image4.png", alt: "Espacio recuperado" },
  {
    type: "video",
    src: "/gallery/video2.mp4",
    thumbnail: "/gallery/video2.jpg",
  },
];

export function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-blancoHuesoFondo py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-soft-light" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -left-64 -top-64 h-[600px] w-[600px] rounded-full bg-[#fde047]/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-kawaiiRT text-4xl text-white md:text-6xl mb-8">
            <span className="block bg-gradient-to-r from-moradoSecundario to-[#0a33ff] bg-clip-text text-transparent">
              Nuestra Galería
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-cyan-100 md:text-xl"
          >
            Momentos de alegría, inclusión y transformación comunitaria
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl border-4 border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl transition-all hover:border-[#FDE047]/30"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className=" object-cover transition-transform group-hover:scale-105"
                />
              ) : (
                <>
                  <video
                    autoPlay
                    loop
                    muted
                    className="h-full w-full object-cover"
                    poster={item.thumbnail}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                    <Play className="h-12 w-12 text-[#FDE047] fill-current" />
                  </div>
                </>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
              >
                <p className="text-sm font-semibold">
                  {item.type === "image"
                    ? "📸 Momento especial"
                    : "🎥 Video destacado"}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link
            href="https://www.instagram.com/tijuanita_mi_ciudad/"
            target="_blank"
          >
            <button className="inline-flex animate-shine items-center justify-center rounded-2xl bg-gradient-to-r from-[#FDE047] via-[#4ECDC4] to-[#FDE047] bg-[length:200%_auto] px-8 py-4 text-lg font-semibold text-gray-900 transition-all hover:scale-105 hover:shadow-lg">
              Ver más recuerdos en Instagram
              <Instagram className="ml-2 h-6 w-6 text-gray-900" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
