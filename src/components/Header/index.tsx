import Image from "next/image";
import Link from "next/link";
import { Container } from "./styles";
import logoImage from '../../../public/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export function Header(){
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    function handleSetMenuVisible(){
        isMenuVisible === false ? setIsMenuVisible(true) : setIsMenuVisible(false);
    }


    return(
        <Container isMenuVisible={isMenuVisible}>
            <div className="logo-container">
                <Image
                    layout="fill"
                    objectFit="contain"
                    src={logoImage}
                    alt="logo"
                />
            </div>
            
            <nav className="desktop-menu">
                <ul>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Carrers</Link></li>
                    <li><Link href="/">Events</Link></li>
                    <li><Link href="/">Products</Link></li>
                    <li><Link href="/">Support</Link></li>
                </ul>
            </nav>

            <nav className="mobile-menu">
                <FaBars className="menu-bar" onClick={(e) => handleSetMenuVisible()}></FaBars>
                <ul>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Carrers</Link></li>
                    <li><Link href="/">Events</Link></li>
                    <li><Link href="/">Products</Link></li>
                    <li><Link href="/">Support</Link></li>
                </ul>
            </nav>
        </Container>
    )
}