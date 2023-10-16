import { Button } from "../Button";
import { CreationCard } from "../CreationCard";
import { Container } from "./styles";

export function CreationsSection(){
    return(
        <Container>
            <div className="title">
                <h1>Our creations</h1>
                <Button text="Ver todos"/>
            </div>
            <div className="card-container">
                <CreationCard 
                    text="Deep earth"
                    image="/image-deep-earth.jpg"
                />
                <CreationCard 
                    text="Night arcade"
                    image="/image-night-arcade.jpg"
                />
                <CreationCard 
                    text="Soccer team vr"
                    image="/image-soccer-team.jpg"
                />
                <CreationCard 
                    text="The grid"
                    image="/image-grid.jpg"
                />
                <CreationCard 
                    text="From up above vr"
                    image="/image-from-above.jpg"
                />
                <CreationCard 
                    text="Pocket borealis"
                    image="/image-pocket-borealis.jpg"
                />
                <CreationCard 
                    text="The curiosity"
                    image="/image-curiosity.jpg"
                />
                <CreationCard 
                    text="Make it fisheye"
                    image="/image-fisheye.jpg"
                />
            </div>
            <Button text="Ver todos" className="mobile-btn"/>
        </Container>
    )
}