
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/Auth';
import avatar from '../../assets/img/avatar.png';
import { RootState } from '../../store/store';

export const Navbar = () => {

    const dispatch = useDispatch();

    const { user } = useSelector((state: RootState) => state.auth);

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <div id="navbar">
            <Link to="/" id="logo">
                <h1>ToDoAPP</h1>
            </Link>

            <div id="navbar-links">
                {
                    user && <span>{user.username}</span>
                }
                <img src={avatar} alt="Avatar" className="profile-pic dropdown-toggle dropleft" id="dropdownMenuButton" data-toggle="dropdown" />
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to="/profile" className="dropdown-item">Perfil</Link>
                    <div className="dropdown-item pointer" onClick={handleLogout}>
                        Salir
                    </div>
                </div>
            </div>
        </div>
    )
}
