import s from './Brands.module.scss';

const Brands = () => {
    return (
        <section className={s.brands}>
            <h3 className={s.title}>Trusted more than 150+ brand</h3>
            <div className={s.brandsLogo}>
                <img src="img/logos_microsoft.svg" alt=""/>
                <img src="img/logos_google.svg" alt=""/>
                <img src="img/logos_slack.svg" alt=""/>
                <img src="img/logos_wordpress.svg" alt=""/>
            </div>
        </section>
    )
}

export default Brands;