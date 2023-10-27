import { Container } from "./styles";
import { Menu } from "../Menu";
import { AppContainer } from "../AppContainer";
import Image from "next/image";
import logoImage from '../../../public/logo.svg';

import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

export function Footer(){
    return(
        <Container>
            <AppContainer>
                <div className="left-footer">
                    <div className="logo">
                        <Image
                            src={logoImage}
                            alt="logo"
                        />
                    </div>
                    <Menu />
                </div>
                <div className="right-footer">
                    <div className="social">
                        <AiFillFacebook className="icon"/>
                        <AiOutlineTwitter className="icon"/>
                        <BsPinterest className="icon"/>
                        <AiOutlineInstagram className="icon"/>
                    </div>
                    <p>2023 Loopstudios. Todos os direitos reservados.</p>
                </div>
            </AppContainer>
        </Container>
    )
}