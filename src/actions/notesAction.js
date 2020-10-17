import { db } from "../firebase/firebase-config";
import { types } from "../types/types";



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

        dispatch(activeNote(doc.id, newNotes))
    }
}

export const activeNote = (id, note) => (
    {
        type: types.notesActive, 
            payload: {
                id, 
                ...note
            }
    }
)

/* Esto devuelve un objeto con lo siguiente,
 y lo envia al reducer para cambair el estado inicial
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