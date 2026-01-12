"use client";

import { routingConfig } from "@/config/routingConfigs";
import { websiteConfigs } from "@/config/websiteConfigs";
import { motion } from "motion/react";
import Link from "next/link";
import Modale from "./Modale";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState(false);

  const openModal = (register: boolean) => {
    setIsRegister(register);
    setShowModal(true);
  };

  return (
    <>
      <motion.div
        transition={{ ease: [0, 0.69, 0.6, 0.96], duration: 1 }}
        initial={{
          y: -100,
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
        }}
        animate={{
          y: 0,
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)",
        }}
        className="h-12 fixed w-full flex items-center bg-neutral-950 text-neutral-100 border-b border-neutral-800"
      >
        <Link href="/" className="ml-3">
          {websiteConfigs.title}
        </Link>
        <motion.div
          transition={{ delay: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex gap-20 mx-auto"
        >
          <Link
            href={routingConfig.home}
            className="hover:text-cyan-400 cursor-pointer"
          >
            Домой
          </Link>
          <Link
            href={routingConfig.about}
            className="hover:text-cyan-400 cursor-pointer"
          >
            О нас
          </Link>
          <Link
            href={routingConfig.contacts}
            className="hover:text-cyan-400 cursor-pointer"
          >
            Контакты
          </Link>
        </motion.div>

        <div className="flex mr-6 gap-4">
          <motion.button
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: [0.67, -0.01, 0.36, 0.92],
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            className="px-4 py-1 bg-neutral-900 text-cyan-400 border border-cyan-400 hover:bg-neutral-800"
            onClick={() => openModal(true)}
          >
            Войти
          </motion.button>
          <motion.button
            transition={{
              duration: 0.7,
              delay: 0.7,
              ease: [0.67, -0.01, 0.36, 0.92],
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            className="px-4 py-1 bg-cyan-400 text-neutral-950 hover:bg-cyan-300"
            onClick={() => openModal(false)}
          >
            Регистрация
          </motion.button>
        </div>
      </motion.div>
      {showModal && <Modale isRegister={isRegister} onClose={setShowModal} />}
    </>
  );
};

export default Navbar;
