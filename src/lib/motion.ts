import { useReducedMotion, type Variants } from 'framer-motion';

/**
 * Shared Framer Motion variants formalizing the ad hoc initial/whileInView
 * pattern already used across Home.tsx / PlatformOverview.tsx and other
 * scroll-reveal sections. Drop-in compatible with the existing call sites:
 *
 *   <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
 *
 * matches the existing ad hoc shape:
 *
 *   initial={{ opacity: 0, y: 20 }}
 *   whileInView={{ opacity: 1, y: 0 }}
 *   viewport={{ once: true }}
 *   transition={{ delay: i * 0.1 }}
 */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const fadeUpSpring: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

export function staggerContainer(staggerAmount = 0.1, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerAmount, delayChildren },
    },
  };
}

export const staggerItem: Variants = fadeUp;

export const viewportOnce = { once: true, margin: '-80px' } as const;

/** Thin re-export of Framer's reduced-motion hook for pure-CSS effects and gating parallax hooks. */
export const useAppReducedMotion = useReducedMotion;
