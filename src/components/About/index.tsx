import Image from "next/image";
import { Container } from "./styles";
import image from '../../../public/image-interactive.jpg'

export function About(){
    return(
        <Container>
            <figure>
                <div className="image">
                    <Image
                        src={image}
                        alt="Homem jogando com um VR"
                        // layout="fill"
                        // objectFit="cover"
                    />
                </div>
                <div className="text">
                    <h1>
                        O líder em VR interativo
                    </h1>
                    <p>
                        Fundada em 2011, a Loopstudios produz projetos de realidade virtual a nível mundial para algumas das melhores empresas do mundo. Nossas criações premiadas transformaram os negócios por meio de experiências digitais que se vinculam à sua marca.
                    </p>
                </div>
            </figure>
        </Container>
    )
}