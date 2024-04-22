
import { useEffect, useState } from 'react'
import './App.css'
import Button from './Button/Button'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import translationEn from '../locale/translateEn';
import translationUz from '../locale/translateUz';
i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: translationEn
      },
      uz: {translation: translationUz}
    },
    lng: "uz", 
    fallbackLng: "uz",

    interpolation: {
      escapeValue: false 
    }
  });
function App() {
  const changeLang = (value) =>{
    i18n.changeLanguage(value)
  }
  const { t } = useTranslation();
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch("https://api.autozoomrental.com/api/categories")
    .then((res)=>res.json())
    // .then(items) =>console.log(items?data)
    .then((items) =>setData(items?.data))
  } , [])
  return (
    <>
       <Button changeLang={changeLang} />
    < div className='home-card' >
    {
    data.map((element , i)=>(
      // console.log(element)
     <div key={i} className='card'>
       <img className='card-img' src={`https://api.autozoomrental.com/api/uploads/images/${element?.image_src}`} alt="dfsfds" />
       <h5 className='card-title'>{element?.name_en}</h5>
       <p className='card-subtitle'>{element?.name_ru}</p>
     </div>
    ))
    }
 </div>
 </>

  )
}

export default App




































// data.map((element , i)=>(
//   <div key={i} className='card'>
//     <img className='card-img' src={`https://api.autozoomrental.com/api/uploads/images/${element?.image_src}`} alt="dfsfds" />
//     <h5 className='card-title'>{element?.title}</h5>
//   </div>