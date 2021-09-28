import { useState } from "react"
import { Navbar } from "../ui/Navbar"
import { Password } from "./Password";
import { Profile } from "./Profile";

export const ProfileScreen = () => {

    const [option, setOption] = useState('profile');

    return (
        <>
            <Navbar />
            <div id="profile">
                <div id="profile-option">
                    <span onClick={() => {setOption('profile')}}>Perfil</span>
                    <span onClick={() => {setOption('password')}}>Contraseña</span>
                </div>
                {
                    option === 'profile' ?
                        <Profile /> :
                        <Password />
                }
            </div>
        </>
    )
}
