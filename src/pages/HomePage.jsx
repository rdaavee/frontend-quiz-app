import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div>
            HomePage
            <div>
                <Link to="/quiz">Quiz Page</Link>
                <Link to="/result">Result Page</Link>
            </div>
        </div>
    )
}

export default HomePage
