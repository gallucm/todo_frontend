import Moment from 'react-moment';
import 'moment/locale/es';

export const DateUpdated = ({ date }: any) => {
    return (
        <div>
            <span className="note-update-date">Modificado: <Moment locale="es" fromNow>{date}</Moment> </span>
        </div>
    )
}
