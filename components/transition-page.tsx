"use client";

import { transitionVariantsPage } from "@/utils/motions.transitions";
import { AnimatePresence, motion } from "motion/react";

const TransitionPage = () => {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen z-30 bg-gray-950"
          initial="initial"
          variants={transitionVariantsPage}
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionPage;
