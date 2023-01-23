import HeroSearch from "../Hero/HeroSearch/HeroSearch";
import s from './JoinUs.module.scss';

const JoinUs = () => {
    return (
        <section className={s.join}>
            <h2 className={s.title}>Become a contributor?</h2>
            <p className={s.text}>Join us and get tips & tricks to become a great Designer and Developer</p>
            <HeroSearch placeholder='Enter you email...' btnText='Join Us' />
        </section>
    )
}

export default JoinUs;