"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger: { visible: { transition: { staggerChildren: number } } } = {
  visible: { transition: { staggerChildren: 0.08 } },
};
const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function FadeIn({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} transition={{ delay }} className={className}>{children}</motion.div>;
}

export function FadeInLeft({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>{children}</motion.div>;
}

export function FadeInRight({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>{children}</motion.div>;
}

export function ScaleIn({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>{children}</motion.div>;
}

export function StaggerContainer({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className={className}>{children}</motion.div>;
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div variants={staggerItem} className={className}>{children}</motion.div>;
}

export function HoverLift({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div whileHover={{ y: -3, transition: { duration: 0.2 } }} className={className}>{children}</motion.div>;
}

export function HoverGlow({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div whileHover={{ boxShadow: "0 0 40px rgba(184,134,11,0.08)", transition: { duration: 0.35 } }} className={className}>{children}</motion.div>;
}

export function HeroReveal({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }} className={className}>{children}</motion.div>;
}

export function HeroImage({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }} className={className}>{children}</motion.div>;
}
