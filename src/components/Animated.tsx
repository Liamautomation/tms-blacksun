"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

/* ── Variants ── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};
const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/* ── Exports ── */

export function FadeIn({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} transition={{ delay }} className={className}>
      {children}
    </motion.div>
  );
}

export function FadeInLeft({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className={className}>
      {children}
    </motion.div>
  );
}

export function FadeInRight({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className={className}>
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div variants={staggerItem} className={className}>{children}</motion.div>;
}

export function HoverLift({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div whileHover={{ y: -3, transition: { duration: 0.2 } }} className={className}>
      {children}
    </motion.div>
  );
}

export function HoverGlow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div whileHover={{ boxShadow: "0 0 40px rgba(184,134,11,0.08)", transition: { duration: 0.35 } }} className={className}>
      {children}
    </motion.div>
  );
}

export function HeroReveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }} className={className}>
      {children}
    </motion.div>
  );
}

export function HeroImage({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }} className={className}>
      {children}
    </motion.div>
  );
}