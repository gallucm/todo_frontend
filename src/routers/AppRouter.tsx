import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    HashRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { startCheck } from "../actions/Auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { HomeScreen } from "../components/HomeScreen";
import { EditScreen } from "../components/notes/EditScreen";
import { NewScreen } from "../components/notes/NewScreen";
import { ProfileScreen } from "../components/user/ProfileScreen";
import { RootState } from "../store/store";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

    const { user, checking } = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startCheck());
    }, [dispatch]);

    if (checking) {
        return <h2>Loading...</h2>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" isAuthenticated={user} component={LoginScreen}></PublicRoute>
                    <PublicRoute exact path="/register" isAuthenticated={user} component={RegisterScreen}></PublicRoute>

                    <PrivateRoute exact path="/new" isAuthenticated={user} component={NewScreen}></PrivateRoute>
                    <PrivateRoute exact path="/edit/:id" isAuthenticated={user} component={EditScreen}></PrivateRoute>
                    <PrivateRoute exact path="/profile" isAuthenticated={user} component={ProfileScreen}></PrivateRoute>
                    <PrivateRoute exact path="/" isAuthenticated={user} component={HomeScreen}></PrivateRoute>

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
