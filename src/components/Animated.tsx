"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export function FadeIn({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} transition={{ delay }} className={className}>{children}</motion.div>;
}

export function StaggerList({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className={className}>{children}</motion.div>;
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div variants={fadeUp} className={className}>{children}</motion.div>;
}

export function HoverCard({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div whileHover={{ y: -4, boxShadow: "0 0 30px rgba(200,150,46,0.08)" }} transition={{ duration: 0.25, ease: "easeOut" }} className={className}>{children}</motion.div>;
}

export function HeroFadeIn({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }} className={className}>{children}</motion.div>;
}