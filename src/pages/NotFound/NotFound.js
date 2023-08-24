import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="NotFound">
            <h1>Uh oh! This is not the page you're looking for!</h1>
            <Link to="/ships">
                <div>Return to Starship List</div>
            </Link>
        </div>
    )
}