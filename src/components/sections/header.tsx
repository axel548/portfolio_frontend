import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiShakeHandsLine } from '@remixicon/react'
import logo from '../../assets/images/Favicon.ico'
// import { menuList } from '../../utlits/fackData/menuList'
import LanguageSelector from '../sections/language/Selector';
import { useGeneralStore } from '../../utlits/store/general.store';
import { useMenuStore } from '../../utlits/store/menu.store';

const Header = () => {
    const { data: generalData, setData: setGeneralData } = useGeneralStore();
    const { language } = useMenuStore();

    const pathName = useLocation().pathname
    const [isSticky, setisSticky] = useState(false)
    
    useEffect(() => {
        const navbar_collapse = document.querySelector(".navbar-collapse")
        navbar_collapse.classList.remove("show")
    }, [pathName])

    useEffect(() => {
        window.addEventListener("scroll", stickyHeader)
        return () => window.removeEventListener("scroll", stickyHeader)
    }, [])

    useEffect(() => {
        setGeneralData(language);
    }, [language, setGeneralData]);

    const stickyHeader = () => {
        const scrollTop = window.scrollY
        if (scrollTop > 85) {
            setisSticky(true)
        }
        else {
            setisSticky(false)
        }
    }
    const general = generalData;
    const hire_me = general?.hire_me || "Hire Me";
    const menuList = Object.entries(general?.navbar || []).map(([key, label], index) => ({
        id: index + 1,
        path: key === "home" ? "/" : `/${key}`,
        label
    }));;

    console.log('General Data in Header:', general);
    console.log('General Data in Navbar:', menuList);
    return (
        <header className={`main-header ${isSticky ? "fixed-header" : ""}`}>
            <div className="header-upper">
                <div className="container">
                    <div className="header-inner d-flex align-items-center">
                        {/* <!-- START LOGO DESIGN AREA --> */}
                        <div className="logo-outer">
                            <div className="logo" style={{ maxWidth: '50px' }}>
                                <Link to="/"><img src={logo} alt="Logo" title="Logo" /></Link>
                            </div>
                        </div>
                        {/* <!-- / END LOGO DESIGN AREA -->
                        <!-- START NAV DESIGN AREA --> */}
                        <div className="nav-outer clearfix mx-auto">
                            {/* <!-- Main Menu --> */}
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header">
                                    <div className="mobile-logo">
                                        <Link to="/"><img src={logo} alt="Logo" title="Logo" /> </Link>
                                    </div>
                                    {/* <!-- Toggle Button --> */}
                                    <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="navbar-collapse collapse">
                                    <ul className="navigation onepage clearfix">
                                        {
                                            menuList.map(({ id, label, path }) => <li key={id}><Link to={path} className="nav-link-click" >{label}</Link></li>)
                                        }
                                    </ul>
                                </div>
                            </nav>

                        </div>
                        <div className="menu-btns" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <LanguageSelector />
                            <Link to="/contact" className="theme-btn">{hire_me} <RiShakeHandsLine size={15} /> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header