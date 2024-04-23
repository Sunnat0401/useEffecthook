import { useTranslation } from 'react-i18next'
import './Header.css'
    const Header = ({changeLang}) => {
        const changeLangHandler = (e) =>{
            changeLang(e.target.value)
          }
          const {t} = useTranslation()
        
      return (
        <div className='wrap'>
        <div className='select'>
            <select name="" id="" onClick={changeLangHandler}>
                <option value="uz">Uz</option>
                <option value="en">En</option>
            </select>
            <br />
        </div>
            <h1 className='btn-title'>{t("welcome")}</h1>
          </div>
      )
    }
    
    export default Header