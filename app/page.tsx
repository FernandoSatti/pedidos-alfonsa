"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo de cerveza con filtro */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Logo/Título animado */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              ALFONSA
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl sm:text-2xl text-orange-200 font-light tracking-wider"
          >
            DISTRIBUIDORA
          </motion.p>
        </motion.div>

        {/* Botones de sucursales */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl"
        >
          {/* Botón Sucursal Llerena */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group">
            <Link href="https://v0-pedido-management-app.vercel.app/" className="block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-8 sm:p-10 shadow-2xl transition-all duration-300 group-hover:shadow-orange-500/25 group-hover:shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">SUCURSAL</h2>
                  <p className="text-3xl sm:text-4xl font-black text-white tracking-wide">LLERENA</p>
                  <div className="mt-4 w-full h-1 bg-white/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 0.8 }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Botón Sucursal Iseas */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group">
            <Link href="https://pedidos-iseas.vercel.app/" className="block">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-8 sm:p-10 shadow-2xl transition-all duration-300 group-hover:shadow-orange-500/25 group-hover:shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">SUCURSAL</h2>
                  <p className="text-3xl sm:text-4xl font-black text-white tracking-wide">ISEAS</p>
                  <div className="mt-4 w-full h-1 bg-white/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Texto decorativo inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-orange-300/80 text-sm sm:text-base font-light tracking-widest">SELECCIONA TU SUCURSAL</p>
        </motion.div>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              opacity: 0,
            }}
            animate={{
              y: -100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
