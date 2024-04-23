import '../index.css'
import logo from '../../public/autozoom.svg'
import select1 from '../../public/uz.jpg'
import select2 from '../../public/en.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className='navbar-select' name="" id="">
                <a><img  className='select-images' src={select1} alt="fsdf" /></a>
                <a><img className='select-images' src={select2} alt="dsfsdf" /></a>
            </div>
          <form  className="navbar-form">
          <i className="fa-solid fa-magnifying-glass icon"></i>
          <input className="navbar-search" type="text" placeholder="Search..."   />
          </form>
            <ul className="navbar-list">
                <li className="navbar-item "><img src={logo} className='navbar-img'  alt="dsfsdfwef" /></li>
                <li className="navbar-item">Avtomabillar</li>
                <li className="navbar-item">Brand</li>
                <li className="navbar-item">Xizmatlar</li>
                <li className="navbar-item">Biz haqimizda</li>
                <li className="navbar-item">Aloqalar</li>
                <li className="navbar-item">Blog</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar