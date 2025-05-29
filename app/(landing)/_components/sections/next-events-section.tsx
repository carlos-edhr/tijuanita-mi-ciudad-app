"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, MapPin, Bell } from "lucide-react";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email("Ingresa un correo válido"),
});

const events = [
  {
    date: { day: "15", month: "OCT", year: "2024" },
    title: "Vía Recreativa Familiar",
    location: "Paseo Pedregal, Tijuana",
    activities: [
      "Carreras infantiles",
      "Taller de pintura",
      "Lecturas infantiles",
    ],
    formLink: "#",
  },
  {
    date: { day: "22", month: "OCT", year: "2024" },
    title: "Ciclismo Infantil",
    location: "Parque Morelos",
    activities: ["Ruta segura", "Decoración de bicis", "Concurso de disfraces"],
    formLink: "#",
  },
  {
    date: { day: "29", month: "OCT", year: "2024" },
    title: "Fiesta de Lectura al Aire Libre",
    location: "Plaza Santa Cecilia",
    activities: ["Cuentacuentos", "Intercambio de libros", "Teatro infantil"],
    formLink: "#",
  },
];

export function NextEventsSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <section className=" relative overflow-hidden bg-blancoHuesoFondo py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-soft-light" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -right-64 -bottom-64 h-[600px] w-[600px] rounded-full bg-[#fde047]/10 blur-3xl"
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
              Próximos eventos
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white/10 p-8 backdrop-blur-lg transition-all hover:bg-white/20"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(253,224,71,0.15)_0%,transparent_70%)] opacity-0 transition-opacity group-hover:opacity-50" />

              <div className="flex items-center gap-4 mb-6">
                <div className="text-[#FDE047]">
                  <Calendar className="h-8 w-8" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-white">
                    {event.date.day}
                  </div>
                  <div className="text-[#4ECDC4]">
                    {event.date.month} {event.date.year}
                  </div>
                </div>
              </div>

              <h3 className="font-luckiest_guy text-2xl text-white mb-4">
                {event.title}
              </h3>

              <div className="flex items-center gap-2 mb-4 text-[#4ECDC4]">
                <MapPin className="h-5 w-5" />
                <span className="text-sm">{event.location}</span>
              </div>

              <div className="mb-6 space-y-2">
                {event.activities.map((activity, i) => (
                  <div key={i} className="flex items-center gap-2 text-cyan-50">
                    <Clock className="h-4 w-4 text-[#FDE047]" />
                    <span>{activity}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <Button
                  className="rounded-xl bg-[#FDE047] text-gray-900 hover:bg-[#FDE047]/90"
                  onClick={() => window.open(event.formLink, "_blank")}
                >
                  Inscribirse
                </Button>
                <button className="flex items-center gap-2 text-[#4ECDC4] hover:text-[#FDE047] transition-colors">
                  <Bell className="h-5 w-5" />
                  <span className="text-sm">Recordatorio</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        placeholder="Ingresa tu email para recordatorios"
                        className="h-14 rounded-xl border-none bg-white/10 text-lg backdrop-blur-lg placeholder:text-gray-200 focus:ring-2 focus:ring-[#FDE047]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="h-14 gap-2 rounded-xl bg-[#4ECDC4] px-8 text-lg font-semibold text-gray-900 transition-all hover:bg-[#4ECDC4]/90 hover:shadow-lg"
              >
                Suscribirme
                <Bell className="h-5 w-5" />
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
