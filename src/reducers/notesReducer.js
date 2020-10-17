import { types } from "../types/types"
/* 
    {
    notes: [],
    active: null,
    active: {
        id: 'lasnldadlnnadsladsdansl',
        title: '',
        description: '',
        incomplete: false,
        complete: false,
        imageUrl: '',
        date: 
        }
    }

*/


const initialState = {
    notes: [],
    active: null,
    }

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.notesActive: 
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        
        default:
            return state
    }


}