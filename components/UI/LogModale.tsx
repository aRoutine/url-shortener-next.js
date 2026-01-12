import PrimaryInput from "./PrimaryInput";
import { motion } from "motion/react";
import PrimaryButton from "./PrimaryButton";

const LogModale = () => {
  const labelParams = ["Имя пользователя", "Пароль"];
  const inputParamsPlaceholder = ["User", "password"];
  const inputParamsName = ["username", "password"];
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="h-max mt-5 w-full flex justify-center">
        <p className="flex w-full justify-center h-max mb-6 text-3xl text-cyan-400">
          Авторизация
        </p>
      </div>
      <div className="w-full h-full flex flex-col justify-center">
        {labelParams.map((param, index) => {
          return (
            <div className="ml-4 mr-2 flex flex-col" key={param}>
              <motion.label
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.1 }}
              >
                {param}
              </motion.label>
              <PrimaryInput
                placeholder={inputParamsPlaceholder[index]}
                name={inputParamsName[index]}
                delayCount={index * 0.1 + 0.1}
              ></PrimaryInput>
            </div>
          );
        })}
        <PrimaryButton classNameParams="bg-cyan-400 self-center rounded-md w-25 h-8 m-10 text-neutral-950 hover:bg-cyan-300 active:bg-cyan-500 border border-cyan-400">
          Войти
        </PrimaryButton>
      </div>
    </div>
  );
};

export default LogModale;
