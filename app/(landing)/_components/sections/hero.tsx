"use client";

import Spline from "@splinetool/react-spline";

import { motion } from "framer-motion";

// Color sequence for "Tijuanita mi ciudad" (21 letters)
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

export function HeroSection() {
  const title = "Tijuanita mi ciudad".split("");
  const mobileBreakIndex = 10; // Índice después de "Tijuanita " (incluye espacio)

  return (
    <section className="relative min-h-screen pb-12 overflow-hidden bg-gradient-to-br from-[#4F46E5] to-[#22C55E] px-4 pt-20 md:px-8">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-soft-light" />

      <section className="min-h-[125vh] w-full flex flex-col relative">
        <div className="z-50 w-full mx-auto flex-col sm:mt-36 mt-20 c-space gap-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-luckiest_guy text-center leading-tight break-words px-4"
          >
            {/* Parte 1: Tijuanita */}
            <div className="md:inline-block">
              {title.slice(0, mobileBreakIndex).map((letter, index) => (
                <motion.span
                  key={index}
                  style={{ color: LETTER_COLORS[index] }}
                  className="cursor-default inline-block text-[4rem] sm:text-[6rem] md:text-[8rem] hover:scale-110 transition-transform"
                  whileHover={{ y: -10 }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>

            {/* Parte 2: mi ciudad con salto responsivo */}
            <div className="block md:inline-block">
              {title.slice(mobileBreakIndex).map((letter, index) => (
                <motion.span
                  key={index + mobileBreakIndex}
                  style={{ color: LETTER_COLORS[index + mobileBreakIndex] }}
                  className="cursor-default inline-block text-[4rem] sm:text-[6rem] md:text-[8rem] hover:scale-110 transition-transform"
                  whileHover={{ y: -10 }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
          </motion.h1>
        </div>

        <motion.div
          className="pt-56 w-full h-full absolute inset-0 z-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Spline
            scene="https://prod.spline.design/dO8F-gfSfYNoz-1h/scene.splinecode"
            className="w-full h-full"
            onLoad={() => {
              // CSS-based optimization for mobile
              if (typeof window !== "undefined" && window.innerWidth < 768) {
                document
                  .querySelector(".spline-canvas")
                  ?.classList.add("mobile-optimized");
              }
            }}
          />
        </motion.div>
      </section>
    </section>
  );
}

// {/* <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-24">
//   {/* Text Content */}
//   <div className="space-y-6 text-white">
//     <h1 className="text-4xl font-bold leading-tight md:text-6xl md:leading-[1.2]">
//       Transformando espacios,
//       <span className="block bg-gradient-to-r from-[#FDE047] to-[#F59E0B] bg-clip-text text-transparent">
//         creando sonrisas
//       </span>
//     </h1>

//     <p className="text-lg text-gray-100 md:text-xl">
//       Recuperamos espacios públicos para convertirlos en lugares mágicos donde
//       la infancia puede crecer feliz, inclusiva y libremente.
//     </p>

//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="flex max-w-xl flex-col gap-4 sm:flex-row"
//       >
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem className="flex-1">
//               <FormControl>
//                 <Input
//                   placeholder="Ingresa tu email para unirte"
//                   className="h-14 rounded-xl border-none bg-white/10 text-lg backdrop-blur-lg placeholder:text-gray-200 focus:ring-2 focus:ring-[#FDE047]"
//                   {...field}
//                 />
//               </FormControl>
//             </FormItem>
//           )}
//         />
//         <Button
//           type="submit"
//           className="h-14 gap-2 rounded-xl bg-[#FDE047] px-8 text-lg font-semibold text-gray-900 transition-all hover:bg-[#FDE047]/90 hover:shadow-lg"
//         >
//           Unirse ahora
//           <ArrowRight className="h-5 w-5" />
//         </Button>
//       </form>
//     </Form>
//   </div>

//   {/* Image/Graphics Section */}
//   <div
//     initial={{ opacity: 0, x: 20 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.8, delay: 0.2 }}
//     className="relative hidden md:block"
//   >
//     <div className="relative overflow-hidden rounded-3xl border-4 border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
//       {/* <Image
//               src="/images/landing/1.png"
//               alt="Hero image 1"
//               width={600}
//               height={800}
//               priority
//               className="h-full w-full object-contain"
//             /> */}
//       <div className="h-full w-full object-contain">
//         <Spline scene="https://prod.spline.design/dO8F-gfSfYNoz-1h/scene.splinecode" />
//       </div>
//       <div className="absolute inset-0 bg-gradient-to-t from-[#4F46E5]/40 to-[#22C55E]/20" />

//       {/* Animated Elements */}
//       <div
//         animate={{ y: [-10, 10, -10] }}
//         transition={{ duration: 4, repeat: Infinity }}
//         className="absolute left-10 top-1/3 h-24 w-24 rounded-full bg-[#FDE047]/20"
//       />
//       <div
//         animate={{ scale: [1, 1.2, 1] }}
//         transition={{ duration: 3, repeat: Infinity }}
//         className="absolute right-12 top-1/4 h-16 w-16 rounded-2xl border-4 border-[#FDE047]/30"
//       />
//     </div>
//   </div>
// </div>;

// {
//   /* Scrolling Indicator */
// }
// <div
//   animate={{ y: [0, 15, 0] }}
//   transition={{ duration: 2, repeat: Infinity }}
//   className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
// >
//   <div className="h-8 w-5 rounded-full border-2 border-[#FDE047]" />
// </div>; */}
