
import { Navbar } from '../ui/Navbar';
import { New } from './New';

export const EditScreen = () => {
    return (
        <>
            <Navbar />
            <New edit={true}/>
        </>
    )
}
