import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Notes } from "./notes/Notes"
import { HomeButtons } from "./ui/HomeButtons"
import { Navbar } from "./ui/Navbar"

export const HomeScreen = () => {

    const { notes } = useSelector((state: RootState) => state.note);
    const { loading } = useSelector((state: RootState) => state.ui);
    

    return (
        <>
            <Navbar />
            <Notes />
            
            {
                (!loading && notes.length > 0) &&
                <div className="notes-cant">
                    <span>Notas: <strong>{notes.length}</strong></span>
                </div>
            }
            <HomeButtons />
        </>
    )
}
