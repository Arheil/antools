import s from './HeroSocials.module.scss';
import fb from '../../../assets/img/icons/fb-card.svg';
import instg from '../../../assets/img/icons/inst-icon.svg';
import twit from '../../../assets/img/icons/twt-icon.svg';

const HeroSocials = () => {
  return ( 
    <div className={s.socials}>
      <img src={fb} alt="facebook" />
      <img src={instg} alt="instagram" />
      <img src={twit} alt="twitter" />
    </div>
   );
}
 
export default HeroSocials;
