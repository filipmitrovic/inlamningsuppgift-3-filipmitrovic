import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className='main'>
            <h2>Välj val</h2>
            <Link to="/registration">
                <button className='btn'>Sign me up</button>
            </Link>
            <Link to="/login">
                <button className='btn'>Logga in</button>
            </Link>
        </div>
    )
}

export default HomePage;
