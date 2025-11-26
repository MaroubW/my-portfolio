import { motion } from "framer-motion";

const letters = "<Maroub Wajdi/>".split("");

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function LogoLoader({ onFinish }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.4, duration: 0.5, ease: "easeOut" }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-10 w-80 h-80 bg-emerald-500/20 blur-[100px]" />
        <div className="absolute bottom-[-120px] right-[-40px] w-96 h-96 bg-sky-500/20 blur-[120px]" />
      </div>

      {/* Logo + animation */}
      <div className="relative flex flex-col items-center px-6">
        {/* Logo letters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.3] pb-4"
        >
          {letters.map((char, idx) => (
            <motion.span
              key={idx}
              variants={letterVariants}
              className={`inline-block align-baseline ${
                ["<", "/", ">"].includes(char)
                  ? "text-emerald-400"
                  : "bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-sky-400"
              }`}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        {/* Underline animation */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "80%", opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          className="mt-1 h-[2px] rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 1.5, duration: 0.4 }}
          className="mt-4 text-xs sm:text-sm text-slate-300 tracking-[0.2em] uppercase"
        >
          Portfolio loading
        </motion.p>

        {/* Dots loader */}
        <div className="mt-3 flex gap-2">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: -4 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.6,
                delay: 1.6 + dot * 0.15,
              }}
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
