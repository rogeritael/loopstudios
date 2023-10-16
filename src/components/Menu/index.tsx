import Link from "next/link"
import { Container } from "./styles"

export function Menu(){
    return(
        <Container>
            <li><Link href="/">Sobre</Link></li>
            <li><Link href="/">Carreira</Link></li>
            <li><Link href="/">Eventos</Link></li>
            <li><Link href="/">Produtos</Link></li>
            <li><Link href="/">Suporte</Link></li>
        </Container>
    )
}