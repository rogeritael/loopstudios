import { Container } from "./styles";

type ButtonProps = {
    text: string,
    className?: string
}

export function Button({text, className}: ButtonProps){
    return(
        <Container className={className}>
            {text}
        </Container>
    )
}