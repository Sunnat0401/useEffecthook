import '../index.css'
import logo from '../../public/autozoom.svg'
import select1 from '../../public/uz.jpg'
import select2 from '../../public/en.png'
import './Navbar.css'
import { useTranslation } from 'react-i18next'
const Navbar = ({changeLang}) => {
    const changeLangHandler = (e) =>{
        console.log(e)
        changeLang(e)
      }
      const {t} = useTranslation()
  return (
    <div className='navbar'>
        <div className="container">

                <button onClick={() => changeLangHandler('uz')}   className='select-btn'><img  className='select-images' src={select1} alt="fsdf" /></button>
                <button onClick={() => changeLangHandler('en')}   className='select-btn'><img  className='select-images' src={select2} alt="fsdf" /></button>

          <form  className="navbar-form">
          <i className="fa-solid fa-magnifying-glass icon"></i>
          <input className="navbar-search" type="text" placeholder="Search..."   />
          </form>
            <ul className="navbar-list">
                <li className="navbar-item "><img src={logo} className='navbar-img'  alt="dsfsdfwef" /></li>
                <li className="navbar-item">{t("avto")}</li>
                <li className="navbar-item">{t("brand")}</li>
                <li className="navbar-item">{t("service")}</li>
                <li className="navbar-item">{t("about")}</li>
                <li className="navbar-item">{t("connect")}</li>
                <li className="navbar-item">{t("blog")}</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar