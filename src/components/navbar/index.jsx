import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import './styles.scss';
import logo from '../../assets/3.png';

const data = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' }
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: 'smooth' });
        setToggleIcon(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar_container">
                <img src={logo} alt="Company Logo" className="navbar_container_logo" />
            </div>

            <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
                {data.map((item, index) => (
                    <li key={index} className="navbar_container_menu_item">
                        <button
                            className="navbar_container_menu_item_links"
                            onClick={() => handleScroll(item.id)}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="nav-icon" onClick={() => setToggleIcon(!toggleIcon)}>
                {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
            </div>
        </nav>
    );
};

export default Navbar;