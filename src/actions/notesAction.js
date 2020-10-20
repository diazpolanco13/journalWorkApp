import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./uiActions";



export const startNewNotes = ( note ) => {
    return async (dispatch, getState) => {
        dispatch(startLoading());
        
        const { uid } = getState().auth;

        const newNotes = {
            title: '',
            description: '',
            cancel: false,
            complete: false,
            imageUrl: '',
            date: new Date().getTime()
        }
        
        const doc = await db.collection(`${uid}/journal/notes`).add(newNotes)
        
        dispatch(activeNote(doc.id, newNotes));
        
        dispatch(finishLoading());
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

export const startSaveNotes = (note) => {
    return async( dispatch, getState ) => {
        try {
            const { uid } = getState().auth;
    
            const noteToFirestore = { ...note };
            delete noteToFirestore.id;

            await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore );
            
            dispatch(refreshNote(note.id, note));

            Swal.fire('Saved', note.title, 'success');
            
        } catch (error) {
            
        }
            


    }
}

export const refreshNote = ( id, note ) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note
    }
});

export const startUploading = ( file ) => {
    return async (dispatch, getState) => {
        
        const { active: activeNote } = getState().notes;
        
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload( file );
        activeNote.imageUrl = fileUrl;


        //se desactiva esta opcion porque guarda la nota completa antes de tiempo
        // dispatch(startSaveNotes( activeNote  ))

        Swal.close();
    }
}