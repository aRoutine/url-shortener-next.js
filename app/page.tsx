"use client";

import PrimaryButton from "@/components/UI/PrimaryButton";
import PrimaryInput from "@/components/UI/PrimaryInput";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 100, boxShadow: "0px 0px #000" }}
        animate={{ opacity: 1, y: 0, boxShadow: "10px 10px #000" }}
        transition={{ duration: 0.7, ease: [0.54, 0.03, 0.6, 0.96] }}
        className="cart flex w-100 bg-neutral-930 border border-neutral-800 shadow-[0_0_40px_-10px_rgba(66, 66, 66, 1)]"
      >
        <div className="inputs w-full">
          <div className="forInput flex p-3 gap-3 items-center w-full">
            <div className="forInput flex p-3 items-center w-max gap-3 flex-col">
              <motion.label
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-neutral-100 mb-3"
              >
                Заголовок
              </motion.label>
              <motion.label
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-neutral-100"
              >
                Ссылка
              </motion.label>
            </div>
            <div className="flex flex-col w-full">
              <PrimaryInput delayCount={0.8} placeholder="Google" name="" />

              <PrimaryInput
                delayCount={0.7}
                placeholder="https://www.google.com/"
                name=""
              />
            </div>
          </div>

          <div className="flex justify-center">
            <PrimaryButton>Сократить</PrimaryButton>
          </div>

          <div className="text-for-error-or-succes flex justify-center items-center w-full h-5"></div>
        </div>
      </motion.div>
    </div>
  );
}
