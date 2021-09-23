import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetNotes } from "../actions/Note";
import { RootState } from "../store/store";

export const useNotes = () => {
    
    const dispatch = useDispatch();

    const { user } = useSelector((state: RootState) => state.auth);
    
    useEffect(() => {
        dispatch(startGetNotes(user ? user.id : ''));
    }, [dispatch, user]);
}