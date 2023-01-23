import s from './ToolsCard.module.scss';
import like from '../../../assets/img/icons/like.svg';
import folder from '../../../assets/img/icons/folder.svg';

const ToolsCard = (props) => {
  return (
    <div className={s.card} style={props.width}>
      <div className={s.title}>
        <img src={props.data.img} alt="tools logo" />
        <div className={s.name}>
          <h3>{props.data.name}</h3>
          <br />
          <span>{props.data.pay}</span>
        </div>
      </div>
      <p className={s.text}>{props.data.desc}</p>
      <div className={s.actions}>
        <div className={s.items}>
          <img src={like} alt="add to favorite" />
          <img src={folder} alt="add to file" />
        </div>
        <button className="btn">Visit</button>
      </div>
    </div>
   );
}
 
export default ToolsCard;