import s from './Footer.module.scss';
import logo from "../../assets/img/icons/logo.svg";

const Footer = () => {
    return (
        <section className={s.footer}>
            <div className={s.copyright}>
                <div className={s.logo}>
                    <img src={logo} alt="logo" />
                    <span>antools.</span>
                </div>
                <span>Copyright 2021. Antools</span>
                <p>Antool is a web collection of information on paid or free Design and Development tools</p>
            </div>

            <div className={s.info}>
                <div className={s.infoCard}>
                    <h3 className={s.title}>Contact Us</h3>
                    <ul className={s.list}>
                        <li className={s.item}>+621987463</li>
                        <li className={s.item}>M Building, No.10 A</li>
                        <li className={s.item}>antools@awesome.com</li>
                    </ul>
                </div>
                <div className={s.infoCard}>
                    <h3 className={s.title}>Categories</h3>
                    <ul className={s.list}>
                        <li className={s.item}>Design</li>
                        <li className={s.item}>Development</li>
                    </ul>
                </div>
                <div className={s.infoCard}>
                    <h3 className={s.title}>Company Info</h3>
                    <ul className={s.list}>
                        <li className={s.item}>About Us</li>
                        <li className={s.item}>Our Partners</li>
                        <li className={s.item}>Blog</li>
                    </ul>
                </div>
            </div>


        </section>
    )
}

export default Footer;