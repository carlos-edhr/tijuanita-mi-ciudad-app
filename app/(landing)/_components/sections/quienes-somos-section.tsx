"use client";

import { motion } from "framer-motion";
import { Bike, BookOpen, Route, Footprints } from "lucide-react";
import { Button } from "@/components/ui/button";

const activities = [
  {
    icon: <Route className="h-12 w-12" />,
    title: "Vías Recreativas",
    description:
      "Cierre temporal de calles para juego libre y actividades familiares",
    benefit: "Fomenta la convivencia urbana segura",
    color: "#4ECDC4",
  },
  {
    icon: <Bike className="h-12 w-12" />,
    title: "Ciclismo Infantil",
    description: "Talleres de movilidad segura y rutas guiadas para niños",
    benefit: "Promueve actividad física y autonomía",
    color: "#FDE047",
  },
  {
    icon: <BookOpen className="h-12 w-12" />,
    title: "Eventos de Lectura",
    description: "Sesiones de cuentacuentos en espacios al aire libre",
    benefit: "Estimula imaginación y aprendizaje",
    color: "#FF6B6B",
  },
];

export function QuienesSomosSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#4F46E5] to-[#22C55E] py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('/images/textures/noise.jpg')] opacity-10 mix-blend-soft-light" />

      {/* Elemento decorativo animado */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -left-64 -bottom-64 h-[600px] w-[600px] rounded-full bg-[#fde047]/10 blur-3xl"
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
            <span className="block bg-gradient-to-r from-[#fde047] to-[#f59e0b] bg-clip-text text-transparent">
              ¿Quiénes somos?
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white/10 p-8 backdrop-blur-lg transition-all hover:bg-white/20"
            >
              <div
                className="absolute inset-0 -z-10 opacity-30 transition-opacity group-hover:opacity-50"
                style={{
                  background: `radial-gradient(circle at center, ${activity.color}40 0%, transparent 70%)`,
                }}
              />

              <div className="text-center">
                <div
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl transition-all"
                  style={{ backgroundColor: `${activity.color}20` }}
                >
                  {activity.icon}
                </div>

                <h3 className="font-luckiest_guy text-2xl text-white mb-4">
                  {activity.title}
                </h3>

                <p className="text-cyan-50 mb-6">{activity.description}</p>

                <div
                  className="inline-block rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    backgroundColor: `${activity.color}30`,
                    color: activity.color,
                  }}
                >
                  {activity.benefit}
                </div>
              </div>

              <motion.div
                className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-[#fde047]/20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3 + index, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        {/* Llamado a la acción */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Button
            variant="ghost"
            className="inline-flex animate-shine items-center justify-center rounded-2xl bg-gradient-to-r from-[#FDE047] via-[#FF6B6B] to-[#FDE047] bg-[length:200%_auto] px-8 py-6 text-lg font-semibold text-gray-900 transition-all hover:scale-105 hover:shadow-lg"
          >
            Ver calendario completo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
