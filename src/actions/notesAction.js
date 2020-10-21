    import Swal from "sweetalert2";
    import { db } from "../firebase/firebase-config";
    import { fileUpload } from "../helpers/fileUpload";
    import { loadNotes } from "../helpers/loadNotes";
    import { types } from "../types/types";
    import { finishLoading, startLoading } from "./uiActions";


// 1- Acciones para crear una nueva tarea
    export const startNewNotes = ( note ) => {
        return async (dispatch, getState) => {

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

            
        }
}
    

// 2- Accion para cargar las nota ACTIVA o seleccionada
    export const activeNote = ( id, note ) => ({
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    });


// 3- Acciones para cargar TODAS las notas del la base de datos

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



// 4- Acciones para guardar las notas en la base de datos

    export const startSaveNotes = (note) => {
        return async( dispatch, getState ) => {
            try {
                const { uid } = getState().auth;
        
                if (!note.imageUrl) {
                    delete note.imageUrl
                }

                const noteToFirestore = { ...note };
                delete noteToFirestore.id;

                await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore );
                
                dispatch(refreshNote(note.id, note));

                Swal.fire('Saved', note.title, 'success');
                
            } catch (error) {
                console.log(error)
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


// 5-

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