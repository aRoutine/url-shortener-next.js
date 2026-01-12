"use client";

import { motion } from "motion/react";

interface IProps {
  name?: string;
  placeholder?: string;
  delayCount: number;
}

const PrimaryInput = ({ name, placeholder, delayCount }: IProps) => {
  return (
    <motion.input
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      transition={{ delay: delayCount }}
      placeholder={placeholder}
      className="text-neutral-400 border mt-3 mb-2 pl-3 w-full focus:ring-1 bg-neutral-950 focus:ring-cyan-400 pt-1 pb-1 border-neutral-800 hover:border-cyan-300"
      type="text"
      name={name}
    />
  );
};

export default PrimaryInput;
