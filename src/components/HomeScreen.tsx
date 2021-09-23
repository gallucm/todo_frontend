import { Notes } from "./notes/Notes"
import { HomeButtons } from "./ui/HomeButtons"
import { Navbar } from "./ui/Navbar"

export const HomeScreen = () => {

    return (
        <>
            <Navbar />
            <Notes />
            <HomeButtons />
        </>
    )
}
