
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch("https://api.autozoomrental.com/api/brands")
    .then((res)=>res.json())
    .then((item) => setData(item?.data))
  } , [])
  return (
    < div className='home-card' >
       {
       data.map((element , i)=>(
        <div key={i} className='card'>
          <img className='card-img' src={`https://api.autozoomrental.com/api/uploads/images/${element?.image_src}`} alt="dfsfds" />
          <h5 className='card-title'>{element?.title}</h5>
        </div>
       ))
       }
    </div>
  )
}

export default App
