import { Link } from "react-router-dom"

export default function NavBar(){
    return(
    <nav>
        <h1><Link class="navh1" to="/login">Stanger Things</Link></h1>
        <ul>
            <li>
                <Link to="/posts">Posts</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
        </ul>
    </nav>
    )
}