import s from './HeroDesc.module.scss';

const HeroDesc = () => {
  return ( 
    <>
    <h1 className={s.title}>Awesome tools for Designer & Developer<span className={s.dot}>.</span></h1>
    <p className={s.text}>Antool is a web collection of information on paid or free Design and Development tools</p>
    </>
    
   );
}
 
export default HeroDesc;