import s from './Hero.module.scss';
import HeroDesc from "./HeroDesc/HeroDesc";
import HeroSearch from "./HeroSearch/HeroSearch";
import HeroImg from './HeroImg/HeroImg';
import HeroSocials from "./HeroSocials/HeroSocials";

const Hero = () => {
  return ( 
    <section id={s.hero}>
      <div className={s.wrapper}>
        <HeroDesc />
        <HeroSearch
            placeholder='find more than 430+ tools...'
            btnText='Search' />
        <HeroSocials />
      </div>
      <>
        <HeroImg />
      </>
    </section>
   );
}
 
export default Hero;