import Link from "next/link"
import { Container } from "./styles"

export function Menu(){
    return(
        <Container>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Carrers</Link></li>
            <li><Link href="/">Events</Link></li>
            <li><Link href="/">Products</Link></li>
            <li><Link href="/">Support</Link></li>
        </Container>
    )
}