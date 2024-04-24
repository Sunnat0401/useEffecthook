import { useEffect, useState } from 'react';
import './App.css';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import translationUz from '../locale/translateUz';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import translationEn from '../locale/translateEn';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: translationUz },
      en: { translation: translationEn },
    },
    lng: "uz",
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const changeLang = (value) => {
    i18n.changeLanguage(value);
  };

  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.autozoomrental.com/api/categories")
      .then((res) => res.json())
      .then((items) => {
        setData(items?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  console.log(i18n);
  return (
    <>
      <Navbar changeLang={changeLang} />
      <div className='home-card'>
        {loading ? (
          <p>{t('loading')}</p>
        ) : (
          data.map((element, i) => (
            <div key={i} className='card'>
              <img className='card-img' src={`https://api.autozoomrental.com/api/uploads/images/${element?.image_src}`} alt={element?.name_en || element?.name_ru} />
              <h5 className='card-title'>
                {i18n.language === 'en' ? element?.name_en : element?.name_ru}
              </h5>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
