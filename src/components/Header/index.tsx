import Image from "next/image";
import Link from "next/link";
import { Container } from "./styles";
import logoImage from '../../../public/logo.svg';

export function Header(){
    return(
        <Container>
            <div className="logo-container">
                <Image
                    layout="fill"
                    objectFit="contain"
                    src={logoImage}
                    alt="logo"
                />
            </div>
            
            <nav>
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