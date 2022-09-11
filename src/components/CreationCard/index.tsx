import { Container } from "./styles";

type CreationCardProps = {
    image: string,
    text: string
}

export function CreationCard({image, text}: CreationCardProps){
    return(
        <Container image={image}>
            <h1>{text}</h1>
        </Container>
    )
}