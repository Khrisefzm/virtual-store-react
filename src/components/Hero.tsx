// import styles from "./Hero.module.css";

function Hero({ firstText, secondText }) {
  return (
    <section className="h-200 bg-[url('/hero_bg.png')] bg-cover bg-top flex justify-center">
      <article className="w-full max-w-[1080px] flex flex-col items-start justify-center pl-[20px] ">
        <span className="text-2xl text-white font-bold">{firstText}</span>
        <span className="text-6xl text-white font-bold">{secondText}</span>
      </article>
    </section>
  );
}

export default Hero;
