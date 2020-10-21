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
            dispatch(addNewNote(doc.id, newNotes));

        }
    }
 //1.1 -  Actualiza todas las notas con la nueva nota   
    export const addNewNote = (id, note) => ({
        type: types.notesAddNew,
        payload: {
            id, 
            ...note
        }
    })

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


// 5- Action para actualizar la subida de imagenes en la nota

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
    
// 6- accion para eliminar las notesActive

    export const startDeleting = ( id ) => {
        return async (dispatch, getState) => {
            const { uid } = getState().auth;
            
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then( async (result) => {
                if (result.isConfirmed) {

                    try {

                        await db.doc(`${uid}/journal/notes/${id}`).delete();
                        dispatch(deleteNotes(id))
                    
                    } catch (error) {
                    
                        console.log(error) 
                    }

                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                        )
                    }
                })
                
           
            
            
        }
    }
    
    export const deleteNotes = (id) => ({
        type: types.notesDelete,
            payload: id
})
    

// 7- Acciones para purgar las notas al cerrar sesion.-bottom-0

    export const notelogout = ( ) =>( {
        types: types.notesLogoutCleaning,
    })