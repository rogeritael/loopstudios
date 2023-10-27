import Image from "next/image";
import Link from "next/link";
import { Container } from "./styles";
import logoImage from '../../../public/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Menu } from "../Menu";

export function Header(){
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    function handleSetMenuVisible(){
        isMenuVisible === false ? setIsMenuVisible(true) : setIsMenuVisible(false);
    }


    return(
        <Container isMenuVisible={isMenuVisible}>
            <div className="logo-container">
                <Image
                    src={logoImage}
                    alt="logo"
                />
            </div>
            
            <nav className="desktop-menu">
                <Menu />
            </nav>

            <nav className="mobile-menu">
                <FaBars className="menu-bar" onClick={(e) => handleSetMenuVisible()}></FaBars>
                <Menu />
            </nav>
        </Container>
    )
}