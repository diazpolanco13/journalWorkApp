import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./uiActions";



export const startNewNotes = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        
        const newNotes = {
            title: '',
            description: '',
            incomplete: false,
            complete: false,
            imageUrl: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNotes)

        dispatch(activeNote(doc.id, newNotes));
    }
}

export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

/* Esto devuelve un objeto con lo siguiente,
 y lo guarda en firebase
    {
            uid: 94324983sdfsdfu2dfdsff24u9
            title: '',
            description: '',
            incomplete: false,
            complete: false,
            imageUrl: '',
            date: dasdasdasddfds
        }
    }


*/

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
        
        dispatch(finishLoading());
    }
};

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});
