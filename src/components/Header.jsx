import {FaGithub,FaSearch,FaUtensilSpoon, FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link, useNavigate} from 'react-router-dom'
import { UseSelector, useDispatch, useSelector} from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { useState } from 'react'


function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const {user} = useSelector((state)=>state.auth)

    const onLogout = () =>{
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

  return (
    <header className='header'>
        <div className='logo'>
            <Link to="/">Food<span>Mood</span></Link>
        </div>
        <div className={open ? "menu btn10 open" : "menu btn10"} onClick={()=>setOpen(!open)} data-menu="10">
            <div className="icon"></div>
        </div>
        {open? (<div className="menu-bg change-bg" id="menu-bg">
            
        </div>):null}
        <ul className={open ? "dropdown_menu" : "nav_link"}>
            {user ? (<>
                <li onClick={()=>setOpen(false)}>
                    <Link to="/">
                        <FaSearch /> Discover
                    </Link>
                </li>
                <li onClick={()=>setOpen(false)}>
                    <Link to="/myrecipe">
                        <FaUtensilSpoon /> My Recipe
                    </Link>
                </li>
                <li onClick={()=>setOpen(false)}>
                    <button className='btn'onClick={onLogout}><FaSignOutAlt /> Logout</button>
                        
                    
                </li>
                <li className='social' onClick={()=>setOpen(false)}>
                    <Link to="/">
                        <FaGithub />
                    </Link>
                </li>
            </>):
            (<>
            <li onClick={()=>setOpen(false)}>
                <Link to="/">
                    <FaSearch /> Discover
                </Link>
            </li>
            
            <li onClick={()=>setOpen(false)}>
                <Link to="/login">
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li className='social' onClick={()=>setOpen(false)}>
                <Link to="/">
                    <FaGithub />
                </Link>
            </li>
            </>)}
            
        </ul>

    </header>
  )
}

export default Header