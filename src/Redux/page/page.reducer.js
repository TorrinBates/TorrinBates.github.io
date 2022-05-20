const INITIAL_STATE = {
    previous: null,
    rendered: 0,
    selected: 1
}

const pageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_RENDERED":
            return {
                ...state,
                selected: 1,
                previous: state.rendered,
                rendered: action.payload
            }
        case "RENDER_COMMIT":
            return {
                ...state,
                previous: state.rendered,
                rendered: state.selected
            }
        case "INCREASE_SELECTED":
            return {
                ...state,
                selected: state.selected < 4 ? state.selected+1 : state.selected
            }
        case "DECREASE_SELECTED":
            return {
                ...state,
                selected: state.selected > 1 ? state.selected-1 : state.selected
            }
        case "SET_SELECTED":
            return {
                ...state,
                selected: action.payload
            }
        default:
            return state;
    }
}

export default pageReducer;