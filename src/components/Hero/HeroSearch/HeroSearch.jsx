import s from './HeroSearch.module.scss';

const HeroSearch = ({ placeholder, btnText }) => {
  return ( 
    <div className={s.search}>
      <input type="search" name="search" id="search" placeholder={placeholder} />
      <button className="btn">{btnText}</button>
    </div>
   );
}
 
export default HeroSearch;