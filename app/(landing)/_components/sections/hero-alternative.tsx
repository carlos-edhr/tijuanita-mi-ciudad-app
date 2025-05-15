"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Ingresa un correo válido"),
});

const LETTER_COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEEAD",
  "#FF9999",
  "#88D8B0",
  "#FFCC5C",
  "#AAD8B0",
  "#FF6F69",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEEAD",
  "#FF9999",
  "#88D8B0",
  "#FFCC5C",
  "#AAD8B0",
  "#FF6F69",
  "#4ECDC4",
  "#45B7D1",
];

export function HeroAlternativeSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });
  const title = "Tijuanita mi ciudad".split("");
  const mobileBreakIndex = 10;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#4F46E5] to-[#22C55E] px-4 pt-20 md:px-8">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-soft-light" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-24">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-white"
        >
          <motion.h1 className="font-luckiest_guy leading-tight">
            {/* Título con letras de colores */}
            <div className="md:inline-block">
              {title.slice(0, mobileBreakIndex).map((letter, index) => (
                <motion.span
                  key={index}
                  style={{ color: LETTER_COLORS[index] }}
                  className="cursor-default inline-block text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem]"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
            <div className="block md:inline-block">
              {title.slice(mobileBreakIndex).map((letter, index) => (
                <motion.span
                  key={index + mobileBreakIndex}
                  style={{ color: LETTER_COLORS[index + mobileBreakIndex] }}
                  className="cursor-default inline-block text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem]"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-100 md:text-xl font-luckiest_guy"
          >
            Recuperamos espacios públicos para convertirlos en lugares mágicos
            donde la infancia puede crecer feliz, inclusiva y libremente.
          </motion.p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex max-w-xl flex-col gap-4 sm:flex-row"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        placeholder="Ingresa tu email para unirte"
                        className="h-14 rounded-xl border-none bg-white/10 text-lg backdrop-blur-lg placeholder:text-gray-200 focus:ring-2 focus:ring-[#FDE047]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="h-14 gap-2 rounded-xl bg-[#FDE047] px-8 text-lg font-semibold text-gray-900 transition-all hover:bg-[#FDE047]/90 hover:shadow-lg"
              >
                Unirse ahora
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </Form>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex w-[450px] h-fit items-center justify-center md:justify-end"
        >
          <div className=" overflow-hidden rounded-3xl border-4 border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
            <video autoPlay loop muted className="h-full w-full object-cover">
              <source src="/videos/video1.mp4" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-[#4F46E5]/40 to-[#22C55E]/20" />

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute left-10 top-1/3 h-24 w-24 rounded-full bg-[#FDE047]/20"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute right-12 top-1/4 h-16 w-16 rounded-2xl border-4 border-[#FDE047]/30"
            />
          </div>
        </motion.div>
      </div>

      {/* Scrolling Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="h-8 w-5 rounded-full border-2 border-[#FDE047]" />
      </motion.div>
    </section>
  );
}
