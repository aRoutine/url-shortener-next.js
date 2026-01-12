"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import RegModale from "./RegModale";
import LogModale from "./LogModale";
import { motion } from "motion/react";

type ModaleProps = {
  onClose: (v: boolean) => void;
  isRegister: boolean;
};

const Modale = ({ onClose, isRegister }: ModaleProps) => {
  const [portalEl] = useState<HTMLElement | null>(() => {
    if (typeof window === "undefined") return null;
    return document.getElementById("modal-root");
  });

  if (!portalEl) return null;

  return createPortal(
    <div
      className="fixed w-full h-full inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => onClose(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-100 flex bg-neutral-900 flex-col border inner-shadow border-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <button
          className="flex hover:text-cyan-400 h-12  self-end"
          onClick={() => onClose(false)}
        >
          Закрыть
        </button> */}

        <div className="flex w-full h-full">
          {isRegister ? <LogModale></LogModale> : <RegModale></RegModale>}
        </div>
      </motion.div>
    </div>,
    portalEl
  );
};

export default Modale;
