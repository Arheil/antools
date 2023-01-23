import s from './Newcomer.module.scss';
import ToolsCard from "../Tools/ToolsCard/ToolsCard";

const Newcomer = (props) => {
    return (
        <section className={s.newcomer}>
            <div className={s.newcomerInfo}>
                <h2>Newcomer Tools</h2>
                <p>Wow! see the latest update of the most recommended tools from reliable designers and developers</p>
                <button className='btn'>Explore more</button>
            </div>
            <div className={s.newcomerItem}>
                {
                    props.data.map((item, i) => <ToolsCard key={i} width={{width: 288}} data={item} />)
                }
            </div>
        </section>
    )
}

export default Newcomer;