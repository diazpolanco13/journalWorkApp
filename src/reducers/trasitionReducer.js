import { types } from '../types/types'

const initialState = {
    showSidebar: false
}

export const trasitionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.showSidebarType:
            return {
                ...state,
                showSidebar: true
            };
        case types.hideSidebarType:
            return {
                ...state,
                showSidebar: false
            }
            
        default:
            return state
    }
}