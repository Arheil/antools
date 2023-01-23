import s from './Tools.module.scss';
import ToolsCard from './ToolsCard/ToolsCard';

const Tools = ({ data }) => {
  return ( 
    <section className={s.tools}>
      <div className={s.header}>
        <h2 className={s.title}>Most Popular Tools</h2>
        <p className={s.text}>Tools for the best Designers and Developers most popularly used in the world</p>
      </div>
      <div className={s.cards}>
      {
        data.map((item, index) => (<ToolsCard key={index} data={item} />) )
      }
      </div>
        <button className={s.toolsButton + ' btn'}>Load more</button>
    </section>
   );
}
 
export default Tools;
