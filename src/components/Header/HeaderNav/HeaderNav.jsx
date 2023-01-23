import './HeaderNav.scss';

const HeaderNav = () => {
  return ( 
    <nav>
      <ul className='nav-list'>
        <li className='nav-list__item'>Home</li>
        <li className='nav-list__item'>
          <select className='select' name="select"> 
            <option value="value1">Categories</option>
            <option value="value2">Значение 2</option>
            <option value="value3">Значение 3</option>
          </select>
        </li>
        <li className='nav-list__item'>My Collections</li>
        <li className='nav-list__item'>Blog</li>
      </ul>
    </nav>
   );
}
 
export default HeaderNav;
