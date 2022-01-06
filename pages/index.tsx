import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
      <p className="text-7xl text-pink-600 first-letter:underline font-semibold">
        Hola, soy Cecy y soy arquitecto :D
      </p>
      <br />
      <img className="w-3/5 saturate-200" src="/cosarara.png" alt="cosarara" />
      <p className="-m-4 text-gray-500 text-xs">muy buena arquitectura :)</p>
    </div>
  );
};

export default Home;
