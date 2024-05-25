import { Link } from "react-router-dom"
const Navabar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>

        </nav>

    )
}

export default Navabar