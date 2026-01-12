"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  classNameParams?: string;
}

const PrimaryButton = ({
  children,
  classNameParams = "bg-cyan-400 rounded-md w-25 h-8 m-2 text-neutral-950 hover:bg-cyan-300 active:bg-cyan-500 border border-cyan-400",
}: IProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7 }}
      className={classNameParams}
    >
      {children}
    </motion.button>
  );
};

export default PrimaryButton;
