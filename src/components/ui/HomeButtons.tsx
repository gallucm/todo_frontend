
import { Link } from "react-router-dom";

export const HomeButtons = () => {
    return (
        <>
            <div className="fixed-bottom buttons text-center">
                <Link to="/new" className="btn btn-app shadow-none">
                    <i className="fas fa-plus"></i>
                </Link>
            </div>
        </>
    )
}
