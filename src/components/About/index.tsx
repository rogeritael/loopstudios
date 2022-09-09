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
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="text">
                    <h1>
                        The leader in interactive VR
                    </h1>
                    <p>
                        Founded in 2011, Loopstudios has been producing world-class virtual rality projects for some of the best companies around the globe. Our award-winning creations have transformed business through digital experiences that bind to their brand.
                    </p>
                </div>
            </figure>
        </Container>
    )
}