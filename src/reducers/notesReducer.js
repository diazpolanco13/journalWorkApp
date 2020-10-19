import { types } from "../types/types"
/* 
    El objeto que se piensa majear en este reducer 
    tiene estas caracteristicas
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
        
            case types.notesLoad:
                return {
                    ...state,
                    notes: [ ...action.payload ]
                }
        
            case types.notesUpdated:
                return {
                    ...state,
                    notes: state.notes.map(
                        note => note.id === action.payload.id
                            ? action.payload.note
                            : note
                    )
                }
        
        default:
            return state
    }


}