"use client";

import { motion } from "framer-motion";
import {
  PaintBrushIcon,
  HeartIcon,
  UsersIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";
const values = [
  {
    icon: <PaintBrushIcon className="h-12 w-12" />,
    title: "Espacios Creativos",
    description:
      "Transformamos áreas olvidadas en lugares mágicos para el juego y la imaginación infantil",
  },
  {
    icon: <HeartIcon className="h-12 w-12" />,
    title: "Inclusión Total",
    description:
      "Diseñamos actividades accesibles para todas las capacidades y necesidades",
  },
  {
    icon: <UsersIcon className="h-12 w-12" />,
    title: "Comunidad Activa",
    description:
      "Involucramos a familias y vecinos en la creación de espacios públicos",
  },
  {
    icon: <PuzzlePieceIcon className="h-12 w-12" />,
    title: "Desarrollo Integral",
    description: "Combinamos juego físico, creatividad y aprendizaje social",
  },
];

export function MissionSection() {
  return (
    // Possible Background Gradient: bg-gradient-to-br from-[#2563eb] to-[#06b6d4]
    <section
      className="relative overflow-hidden 
     bg-gradient-to-bl from-[#22C55E] to-[#4F46E5] 
    py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-soft-light" />

      {/* Elementos decorativos animados */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-[#fde047]/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-luckiest_guy text-4xl text-white md:text-6xl">
            Nuestra
            <span className="block bg-gradient-to-r from-[#fde047] to-[#f59e0b] bg-clip-text text-transparent">
              Misión
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-cyan-100 md:text-xl"
          >
            Crear una red de espacios públicos inclusivos donde la infancia
            pueda desarrollarse a través del juego libre, la creatividad y la
            convivencia comunitaria.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group relative overflow-hidden rounded-3xl bg-white/10 p-8 backdrop-blur-lg transition-all hover:bg-white/20"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(253,224,71,0.15)_0%,rgba(0,0,0,0)_70%)] opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="text-[#fde047]">{value.icon}</div>

              <h3 className="mt-6 font-luckiest_guy text-2xl text-white">
                {value.title}
              </h3>

              <p className="mt-4 text-cyan-50">{value.description}</p>

              <motion.div
                className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-[#fde047]/20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3 + index, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        {/* Llamado a la acción decorativo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex animate-shine items-center justify-center rounded-2xl bg-gradient-to-r from-[#fde047] via-[#f59e0b] to-[#fde047] bg-[length:200%_auto] px-8 py-4 text-lg font-semibold text-gray-900 transition-all hover:scale-105">
            ¡Únete a la transformación!
          </div>
        </motion.div>
      </div>
    </section>
  );
}
