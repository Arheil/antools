import logo from '../../assets/img/icons/logo.svg';
import s from './Header.module.scss';
import HeaderAuth from './HeaderAuth/HeaderAuth';
import HeaderNav from './HeaderNav/HeaderNav';

const Header = () => {
  return ( 
    <header className={s.header}>
        <div className={s.logo}>
            <img src={logo} alt="logo" />
            <span>antools.</span>
        </div>
        <HeaderNav />
        <HeaderAuth />
    </header>
   );
}
 
export default Header;