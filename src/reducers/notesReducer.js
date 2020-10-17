/* 
    {
    tareas: [],
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
    active: true,
    }

export const notesReducer = (state = {initialState}, action) => {
    switch (action.type) {
    
        
        default:
            return state
    }


}