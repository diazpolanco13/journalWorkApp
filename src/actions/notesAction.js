import { db } from "../firebase/firebase-config";






export const startNewNotes = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        
        const newNotes = {
            title: '',
            description: '',
            incomplete: false,
            complete: false,
            imageUrl: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNotes)

        console.log(doc)
    }
}