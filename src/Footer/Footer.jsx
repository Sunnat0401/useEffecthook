import './Footer.css'
import logo from '../../public/autozoom.svg'
import { useTranslation } from 'react-i18next'
const Footer = () => {
    const {t} = useTranslation()
  return (
    <div className='footer container'>
        <div className=" footer-wrapper">
            <div className="footer-box">
                <img className='footer-logo' src={logo} alt="autozoom" />
                <h2 className="footer-title">
              {t("footer1")}
                </h2>
                <p className="footer-subtitle colors">
                {t("footer2")}
                </p>
            </div>
            <div className="footer-box">
                <ul className="footer-list">
                    <li className="footer-item active">{t("avto")}</li>
                    <li className="footer-item colors">{t("brand")}</li>
                    <li className="footer-item colors">{t("service")}</li>
                    <li className="footer-item colors"> {t("about")}</li>
                    <li className="footer-item colors"> {t("avto")} </li>
                    <li className="footer-item colors"> {t("connect")}</li>
                    <li className="footer-item colors"> {t("blog")}</li>
                </ul>
            </div>
            <div className="footer-box">
                <ul className="footer-list">
                    <li className="footer-items active">{t("blog")}</li>
                    <li className="footer-items active">{t("service")}</li>
                    <li className="footer-items active">{t("connect")}</li>
                    <li className="footer-items colors">  {t("footer3")}</li>
                </ul>
            </div>
            <div className="footer-box">
                <ul className="footer-list">
                    <li className="footer-left active">{t("about")}</li>
                    <li className="footer-left colors">{t("footer4")}</li>
                    <li className="footer-left colors ">{t("footer5")}</li>
                    <li className="footer-left active"> {t("footer6")} </li>
                    <li className="footer-left">  <i className=" fa-brands fa-instagram icons"></i> <i className=" fa-brands fa-facebook icons"></i> <i className="  fa-brands fa-youtube icons"></i></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <button className="footer-btn">{t("footer7")}</button>
            <div className="footer-info">
                <p className="foooter-test">{t("footer8")}</p>
                <p className="foooter-test">{t("footer9")}</p>
            </div>
        </div>
    </div>
  )
}

export default Footer