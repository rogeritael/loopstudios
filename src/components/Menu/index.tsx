import Link from "next/link"

export function Menu(){
    return(
        <ul>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Carrers</Link></li>
            <li><Link href="/">Events</Link></li>
            <li><Link href="/">Products</Link></li>
            <li><Link href="/">Support</Link></li>
        </ul>
    )
}